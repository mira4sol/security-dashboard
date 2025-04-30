'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'
import { Menu } from 'lucide-react'
import React from 'react'
import Sidebar from './Sidebar'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile()

  return (
    <div className={isMobile ? 'min-h-screen flex flex-col' : 'grid-container'}>
      {isMobile ? (
        <>
          <header className='bg-sidebar-background border-b border-sidebar-border p-4 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <div className='h-6 w-6 bg-primary rounded flex items-center justify-center'>
                <span className='text-primary-foreground font-mono text-xs font-bold'>
                  st
                </span>
              </div>
              <h1 className='text-white font-mono font-semibold'>
                superteam <span className='text-primary'>security</span>
              </h1>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='left'
                className='p-0 w-[250px] bg-sidebar-background border-r border-sidebar-border'
              >
                <Sidebar />
              </SheetContent>
            </Sheet>
          </header>
          <main className='flex-1 overflow-auto bg-background'>{children}</main>
        </>
      ) : (
        <>
          <Sidebar />
          <main className='overflow-auto bg-background'>{children}</main>
        </>
      )}
    </div>
  )
}

export default AppLayout
