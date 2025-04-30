'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle, ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CTFsPage = () => {
  const router = useRouter()

  return (
    <div className='relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='gradient-circle h-[800px] w-[800px] absolute top-0 left-1/2 -translate-x-1/2'></div>
      </div>

      <header className='relative z-10 p-6 border-b border-border'>
        <h1 className='text-2xl font-mono font-bold'>Capture The Flag</h1>
        <p className='text-gray-400 text-sm'>
          short excercises amd emulations for beginners to practice hacks
        </p>
      </header>

      <div className='relative z-10 p-6 space-y-8'>
        <div className='flex flex-col items-center justify-center py-12 text-center'>
          <AlertTriangle className='h-16 w-16 text-destructive mb-4' />
          <h2 className='text-2xl font-bold mb-2'></h2>
          <p className='text-muted-foreground mb-6'>
            Capture the flag is coming soon
          </p>
          <Button onClick={() => router.push('/vulnerabilities')}>
            <ChevronLeft className='mr-2 h-4 w-4' />
            Back to Vulnerabilities
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CTFsPage
