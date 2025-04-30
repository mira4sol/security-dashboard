'use client'

import { APP } from '@/lib/constants/app.constant'
import { cn } from '@/lib/utils'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  RiBook2Line,
  RiBugLine,
  RiDashboardLine,
  RiFlagLine,
  RiGitBranchLine,
  RiLineChartLine,
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
