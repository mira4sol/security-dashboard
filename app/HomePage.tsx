'use client'

import ExploitTypesChart from '@/components/dashboard/ExploitTypesChart'
import MonthlyTrendChart from '@/components/dashboard/MonthlyTrendChart'
import StatCard from '@/components/dashboard/StatCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  formatCurrency,
  formatDate,
  getBadgeVariantForExploitType,
} from '@/lib/utils'
import { Vulnerability, VulnerabilityStats } from '@/types/markdown'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  const { data: vulnerabilities, isLoading } = useQuery<Vulnerability[]>({
    queryKey: ['/api/vulnerabilities'], // Unique key for this data fetch
  })

  const { data: stats, isLoading: isStatLoading } =
    useQuery<VulnerabilityStats>({
      queryKey: ['/api/stats'], // Unique key for this data fetch
    })

  // Calculate dashboard stats
  const statss = React.useMemo(() => {
    if (!vulnerabilities) return null

    const totalAmountStolen = vulnerabilities.reduce(
      (sum, item) => sum + item.amountStolen,
      0
    )

    const totalExploits = vulnerabilities.length

    // Create exploit type distribution
    const exploitTypeCount: Record<string, number> = {}
    vulnerabilities.forEach((v) => {
      exploitTypeCount[v.exploitType] =
        (exploitTypeCount[v.exploitType] || 0) + 1
    })

    // Calculate percentage of audited protocols
    const auditedProtocols = vulnerabilities.filter(
      (v) =>
        v.auditor &&
        v.auditor.toLowerCase() !== 'unaudited' &&
        v.auditor.toLowerCase() !== 'n/a'
    ).length
    const auditedPercentage = (auditedProtocols / totalExploits) * 100

    // Create monthly trend data
    const monthlyData: Record<string, number> = {}
    vulnerabilities.forEach((v) => {
      const date = new Date(v.exploitDate)
      const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`
      monthlyData[monthYear] = (monthlyData[monthYear] || 0) + v.amountStolen
    })

    return {
      totalAmountStolen,
      totalExploits,
      exploitTypeCount,
      auditedPercentage,
      monthlyData,
    }
  }, [vulnerabilities])

  // Format data for charts
  const exploitTypeData = React.useMemo(() => {
    if (!stats) return []
    return Object.entries(stats?.exploitTypeDistribution || []).map(
      ([type, count]) => ({
        type,
        count,
      })
    )
  }, [stats])

  const monthlyTrendData = React.useMemo(() => {
    if (!stats) return []

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    const trends = Object.entries(stats.monthlyTrend)
      .map(([key, value]) => {
        const [year, monthNum] = key.split('-')
        const monthLabel = `${monthNames[parseInt(monthNum) - 1]} ${year.slice(
          2
        )}`
        return {
          month: monthLabel,
          amount: value || 0,
          // Add sortKey for correct sorting
          sortKey: `${year}-${monthNum.padStart(2, '0')}`,
        }
      })
      .sort((a, b) => a.sortKey.localeCompare(b.sortKey)) // Sort by year and month
      .map(({ month, amount }) => ({ month, amount })) // Remove the sortKey from final output

    return trends
  }, [stats])

  // Calculate signature exploits count
  const signatureExploitsCount =
    stats?.exploitTypeDistribution['Signature Spoofing'] || 0

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

        <Link href='/vulnerabilities'>
          <Button className='bg-primary hover:bg-primary/90 font-mono flex items-center gap-2'>
            <i className='ri-eye-line'></i>
            <span>View All Exploits</span>
          </Button>
        </Link>
      </header>

      <div className='relative z-10 p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {isLoading ? (
            Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className='bg-card rounded-lg p-5 border border-border'
                >
                  <Skeleton className='h-4 w-24 mb-2' />
                  <Skeleton className='h-8 w-32 mb-4' />
                  <Skeleton className='h-1 w-full mb-2' />
                  <Skeleton className='h-4 w-32' />
                </div>
              ))
          ) : (
            <>
              <StatCard
                title='Total Funds Stolen'
                value={formatCurrency(stats?.totalAmountStolen || 0)}
                icon='ri-money-dollar-circle-line'
                progress={75}
                subtext={`Across ${stats?.totalExploits || 0} Solana protocols`}
                variant='funds'
              />

              <StatCard
                title='Total Exploits'
                value={stats?.totalExploits || 0}
                icon='ri-bug-line'
                progress={60}
                subtext='Documented vulnerabilities'
                variant='exploits'
              />

              <StatCard
                title='Signature Exploits'
                value={signatureExploitsCount}
                icon='ri-fingerprint-line'
                progress={
                  (signatureExploitsCount / (stats?.totalExploits || 1)) * 100
                }
                subtext={
                  stats?.totalExploits
                    ? `${Math.round(
                        (signatureExploitsCount / stats.totalExploits) * 100
                      )}% of all exploits`
                    : 'No exploits recorded'
                }
                variant='signature'
              />

              <StatCard
                title='Audited Protocols'
                value={`${Math.round(stats?.auditedProtocolsPercent || 0)}%`}
                icon='ri-shield-check-line'
                progress={stats?.auditedProtocolsPercent || 0}
                subtext='Were audited before exploit'
                variant='audited'
              />
            </>
          )}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          {isLoading ? (
            <>
              <div className='bg-card rounded-lg p-5 border border-border'>
                <Skeleton className='h-6 w-48 mb-4' />
                <Skeleton className='h-[280px] w-full' />
              </div>
              <div className='bg-card rounded-lg p-5 border border-border'>
                <Skeleton className='h-6 w-48 mb-4' />
                <Skeleton className='h-[280px] w-full' />
              </div>
            </>
          ) : (
            <>
              <ExploitTypesChart data={exploitTypeData} />
              <MonthlyTrendChart data={monthlyTrendData} />
            </>
          )}
        </div>

        <div className='bg-card rounded-lg border border-border p-6'>
          <h2 className='font-mono font-bold mb-4'>Recent Security Updates</h2>

          {isLoading ? (
            <div className='space-y-4'>
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className='border-b border-border pb-4'>
                    <Skeleton className='h-5 w-48 mb-2' />
                    <Skeleton className='h-4 w-full mb-1' />
                    <Skeleton className='h-4 w-full mb-1' />
                    <Skeleton className='h-4 w-3/4' />
                  </div>
                ))}
            </div>
          ) : (
            <div className='space-y-6'>
              <div className='border-l-4 border-primary p-4 bg-primary/5 rounded'>
                <h3 className='font-mono font-semibold mb-2'>
                  Contribute to Solana Security
                </h3>
                <p className='text-sm text-gray-300 mb-3'>
                  Help improve the security of the Solana ecosystem by
                  contributing to this open-source security dashboard.
                </p>
                <Link href='/contribute'>
                  <Button variant='terminal' size='sm'>
                    Learn How to Contribute
                  </Button>
                </Link>
              </div>

              {vulnerabilities && vulnerabilities.length > 0 ? (
                <div className='flex flex-col space-y-4'>
                  {vulnerabilities
                    .sort(
                      (a, b) =>
                        new Date(b.exploitDate).getTime() -
                        new Date(a.exploitDate).getTime()
                    )
                    .slice(0, 3)
                    .map((exploit) => (
                      <Link
                        key={exploit.id}
                        href={`/vulnerabilities/${exploit.id}`}
                        className='border-b border-border pb-4 vulnerability-card'
                      >
                        <div className='flex justify-between mb-2'>
                          <h3 className='font-mono font-semibold'>
                            {exploit.protocol}
                          </h3>
                          <Badge
                            variant={getBadgeVariantForExploitType(
                              exploit.exploitType
                            )}
                          >
                            {exploit.exploitType}
                          </Badge>
                        </div>
                        <p className='text-sm text-gray-300 mb-2'>
                          {exploit.technique}
                        </p>
                        <div className='flex justify-between text-xs text-gray-400'>
                          <span>{formatDate(exploit.exploitDate)}</span>
                          <span>{formatCurrency(exploit.amountStolen)}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              ) : (
                <div className='text-center py-8 text-gray-400'>
                  <p>No vulnerability data available</p>
                </div>
              )}

              <div className='flex justify-center'>
                <Link href='/vulnerabilities'>
                  <Button variant='terminal'>View All Exploits</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
