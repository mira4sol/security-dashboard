'use client'

import { APP } from '@/lib/constants/app.constant'
import { cn } from '@/lib/utils'
import { Bot, Github, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  RiBook2Line,
  RiBugLine,
  RiDashboardLine,
  RiFlagLine,
  RiGitBranchLine,
  RiLineChartLine,
  RiRobot2Line,
} from 'react-icons/ri'

const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    // { path: '/', label: 'Dashboard', icon: 'ri-dashboard-line' },
    { path: '/', label: 'Dashboard', icon: RiDashboardLine },
    // { path: '/vulnerabilities', label: 'Vulnerabilities', icon: 'ri-bug-line' },
    { path: '/vulnerabilities', label: 'Vulnerabilities', icon: RiBugLine },
    // { path: '/analytics', label: 'Analytics', icon: 'ri-line-chart-line' },
    { path: '/analytics', label: 'Analytics', icon: RiLineChartLine },
    // { path: '/contribute', label: 'Contribute', icon: 'ri-git-branch-line' },
    { path: '/contribute', label: 'Contribute', icon: RiGitBranchLine },
    // { path: '/resources', label: 'Resources', icon: 'ri-book-2-line' },
    { path: '/resources', label: 'Resources', icon: RiBook2Line },
    // { path: '/ctf', label: 'CTFs', icon: 'ri-flag-line' },
    { path: '/ctf', label: 'CTFs', icon: RiFlagLine },
    { path: '/ai', label: 'SuperSec Ai', icon: RiRobot2Line },
  ]

  return (
    <aside className='bg-sidebar-background border-r border-sidebar-border flex flex-col h-screen'>
      <div className='p-4 border-b border-sidebar-border flex items-center gap-2'>
        <div className='h-6 w-6 bg-primary rounded flex items-center justify-center'>
          <span className='text-primary-foreground font-mono text-xs font-bold'>
            st
          </span>
        </div>
        <h1 className='text-white font-mono font-semibold'>
          superteam <span className='text-primary'>security</span>
        </h1>
      </div>

      <nav className='flex-1 py-4'>
        <ul className='space-y-1'>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-2 font-mono text-sm hover:bg-sidebar-accent',
                  pathname === item.path && 'bg-sidebar-accent text-white'
                )}
              >
                {/* <i className={cn(item.icon, 'text-primary')}></i> */}
                <item.icon className='text-primary' />
                {/* <i className={cn(item.icon, 'text-primary')}></i> */}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* SuperSec AI */}
        <Link
          href={'/ai'}
          target='_blank'
          className='mt-4 mx-4 mb-2 relative cursor-pointer'
        >
          {/* Glow effect */}
          <div className='absolute inset-0 bg-emerald-500 rounded-lg opacity-20 blur-sm'></div>

          {/* Card */}
          <div
            className={`
            p-4 rounded-lg border border-emerald-600 bg-gradient-to-br from-gray-800 to-gray-900 ring-2 ring-emerald-500 ring-opacity-50 hover:border-emerald-500 transition-all duration-200
          `}
          >
            <div className='flex items-center justify-between mb-1'>
              <div className='flex items-center space-x-2'>
                <Bot size={22} className='text-emerald-400' />
                <span className='text-lg font-bold text-white'>
                  SuperSec AI
                </span>
              </div>
              <Sparkles size={16} className='text-emerald-400' />
            </div>

            <div className='mt-2 flex items-center space-x-2'>
              <div className='h-2 w-2 bg-emerald-500 rounded-full animate-pulse'></div>
              <span className='text-xs text-emerald-400'>
                Intelligent Analysis
              </span>
            </div>
          </div>
        </Link>
        {/* End of SuperSec AI */}
      </nav>

      <div className='p-4 border-t border-sidebar-border'>
        <a
          href={APP.repoUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-gray-400 hover:text-white font-mono text-xs'
        >
          <Github size={16} />
          <span>View on GitHub</span>
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
