'use client'

import { Button } from '@/components/ui/button'
import VulnerabilityFilter from '@/components/vulnerabilities/VulnerabilityFilter'
import VulnerabilityTable from '@/components/vulnerabilities/VulnerabilityTable'
import { useToast } from '@/hooks/use-toast'
import { Vulnerability } from '@/types/markdown'
import { useQuery } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const VulnerabilitiesPage = () => {
  const router = useRouter()
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState('')
  const [exploitTypeFilter, setExploitTypeFilter] = useState<string | null>(
    null
  )
  const [protocolTypeFilter, setProtocolTypeFilter] = useState<string | null>(
    null
  )

  const {
    data: vulnerabilities,
    isLoading,
    error,
  } = useQuery<Vulnerability[]>({
    queryKey: ['/api/vulnerabilities'], // Unique key for this data fetch
  })

  const filteredVulnerabilities = vulnerabilities?.filter((v) => {
    // Search term filter
    const matchesSearch =
      searchTerm === '' ||
      v.protocol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.technique.toLowerCase().includes(searchTerm.toLowerCase())

    // Exploit type filter
    const matchesExploitType =
      !exploitTypeFilter || v.exploitType === exploitTypeFilter

    // Protocol type filter
    const matchesProtocolType =
      !protocolTypeFilter || v.protocolType === protocolTypeFilter

    return matchesSearch && matchesExploitType && matchesProtocolType
  })

  const handleViewVulnerability = (vulnerability: Vulnerability) => {
    router.push(`/vulnerabilities/${vulnerability.id}`)
  }

  const handleEditVulnerability = (vulnerability: Vulnerability) => {
    router.push(`/vulnerabilities/${vulnerability.id}/edit`)
  }

  const handleAddVulnerability = () => {
    router.push('/contribute')
    // setLocation('/vulnerabilities/new')
  }

  const handleExport = async () => {
    try {
      // Create a JSON blob for download
      const dataStr = JSON.stringify(filteredVulnerabilities, null, 2)
      const blob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(blob)

      // Create a link and trigger download
      const a = document.createElement('a')
      a.href = url
      a.download = 'solana-vulnerabilities.json'
      document.body.appendChild(a)
      a.click()

      // Clean up
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast({
        title: 'Export successful',
        description: 'Vulnerabilities data has been exported to JSON.',
      })
    } catch (error) {
      toast({
        title: 'Export failed',
        description: 'Failed to export vulnerabilities data.',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className='relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='gradient-circle h-[800px] w-[800px] absolute top-0 left-1/2 -translate-x-1/2'></div>
      </div>

      <header className='relative z-10 p-6 border-b border-border flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-mono font-bold'>Solana Exploits</h1>
          <p className='text-gray-400 text-sm'>for security nerds</p>
        </div>

        <div className='flex items-center gap-4'>
          <Button
            className='bg-primary hover:bg-primary/90 text-primary-foreground font-mono flex items-center gap-2'
            onClick={handleAddVulnerability}
          >
            <Plus className='h-4 w-4' />
            <span>Add Vulnerability</span>
          </Button>
        </div>
      </header>

      <div className='relative z-10 p-6 space-y-6'>
        <VulnerabilityFilter
          onSearch={setSearchTerm}
          onFilterExploitType={setExploitTypeFilter}
          onFilterProtocolType={setProtocolTypeFilter}
          onExport={handleExport}
        />

        <VulnerabilityTable
          onView={handleViewVulnerability}
          data={filteredVulnerabilities || []}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}

export default VulnerabilitiesPage
