'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { APP } from '@/lib/constants/app.constant'
import {
  BookOpen,
  Check,
  Code,
  GitBranch,
  GitPullRequest,
  MessageCircle,
} from 'lucide-react'

const ContributePage = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='gradient-circle h-[800px] w-[800px] absolute top-0 left-1/2 -translate-x-1/2'></div>
      </div>

      <header className='relative z-10 p-6 border-b border-border'>
        <h1 className='text-2xl font-mono font-bold'>contribute</h1>
        <p className='text-gray-400 text-sm'>
          Help improve Solana ecosystem security
        </p>
      </header>

      <div className='relative z-10 p-6 space-y-8 max-w-4xl mx-auto'>
        <div className='bg-card rounded-lg border border-border p-6'>
          <h2 className='text-xl font-mono font-bold mb-4'>Why Contribute?</h2>

          <p className='text-gray-300 mb-6'>
            The Superteam Security dashboard aims to be a comprehensive resource
            for the Solana ecosystem. By contributing to this public good, you
            help improve the security awareness and practices across the
            ecosystem. Your contributions directly impact the safety of
            protocols and users.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card className='bg-muted/50'>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center text-center'>
                  <div className='h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mb-4'>
                    <BookOpen className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='font-mono font-semibold mb-2'>
                    Enhance Knowledge
                  </h3>
                  <p className='text-sm text-gray-400'>
                    Document vulnerabilities and help others learn from past
                    incidents
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-muted/50'>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center text-center'>
                  <div className='h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4'>
                    <Code className='h-6 w-6 text-secondary' />
                  </div>
                  <h3 className='font-mono font-semibold mb-2'>
                    Improve Security
                  </h3>
                  <p className='text-sm text-gray-400'>
                    Contribute to better security practices and standards
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-muted/50'>
              <CardContent className='pt-6'>
                <div className='flex flex-col items-center text-center'>
                  <div className='h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4'>
                    <MessageCircle className='h-6 w-6 text-green-500' />
                  </div>
                  <h3 className='font-mono font-semibold mb-2'>
                    Join Community
                  </h3>
                  <p className='text-sm text-gray-400'>
                    Connect with security researchers and protocol developers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className='font-mono'>How to Contribute</CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='space-y-4'>
              <div className='flex gap-4'>
                <div className='h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0'>
                  <GitBranch className='h-4 w-4 text-primary' />
                </div>
                <div>
                  <h3 className='font-mono font-semibold mb-1'>
                    1. Fork the Repository
                  </h3>
                  <p className='text-sm text-gray-300'>
                    Start by forking the{' '}
                    <a
                      href={APP.repoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-secondary hover:underline'
                    >
                      Superteam Security Repository
                    </a>{' '}
                    to your GitHub account.
                  </p>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0'>
                  <Code className='h-4 w-4 text-primary' />
                </div>
                <div>
                  <h3 className='font-mono font-semibold mb-1'>
                    2. Add or Update Vulnerability Data
                  </h3>
                  <p className='text-sm text-gray-300'>
                    You can contribute by adding new vulnerability entries or
                    updating existing ones using Markdown files in the{' '}
                    <span className='bg-muted p-1 rounded-sm'>
                      /data/vulnerabilities
                    </span>{' '}
                    directory.
                  </p>
                  <p className='text-sm text-gray-300'>
                    Use the frontmatter to provide metadata (e.g. title, date,
                    severity, auditor), and include the exploit or vulnerability
                    details in the body of the Markdown file. Be sure to follow
                    the format outlined in the repository’s contributing
                    guidelines.
                  </p>
                  <div className='mt-2 p-3 bg-muted rounded-md font-mono text-xs overflow-x-auto'>
                    <pre>
                      <span className='bg-black/35 p-2 rounded-md'>
                        01-vulnerability-2025.md
                      </span>
                      {`

---
id: vulnerability id
title: Mango Markets Price Manipulation Attack
protocol: Protocol Name
protocolType: Bridge/DEX/Lending/Stablecoin/Yield Farming/etc
exploitDate: YYYY-MM-DD
amountStolen: 1000000 // in USD
exploitType: Signature Spoofing
technique: Detailed description of the exploit technique
auditor: Audit firm name or Unaudited
status: published/draft
collaborators:
  - username: Prastut
    url: https://x.com/prastutkumar
  - username: 0xDeep
    url: https://x.com/0xDeep
---

Markdown section to enter vulnerability details.`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0'>
                  <Check className='h-4 w-4 text-primary' />
                </div>
                <div>
                  <h3 className='font-mono font-semibold mb-1'>
                    3. Verify Your Contribution
                  </h3>
                  <p className='text-sm text-gray-300'>
                    Ensure your data is accurate, properly formatted, and
                    includes relevant references to support your submission.
                    Test your changes locally to make sure everything works as
                    expected.
                  </p>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0'>
                  <GitPullRequest className='h-4 w-4 text-primary' />
                </div>
                <div>
                  <h3 className='font-mono font-semibold mb-1'>
                    4. Submit a Pull Request
                  </h3>
                  <p className='text-sm text-gray-300'>
                    Once you&apos;re ready, submit a pull request to the main
                    repository. Provide a clear description of your changes and
                    why they&apos;re valuable. Our team will review your
                    submission and provide feedback if needed.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className='font-mono font-semibold mb-3'>
                Contribution Guidelines
              </h3>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary'>•</span>
                  <span>
                    Ensure all vulnerability information is factually correct
                    and verified
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary'>•</span>
                  <span>
                    Include technical details when possible, including root
                    cause analysis
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary'>•</span>
                  <span>
                    Provide references to official postmortems, analyses, or
                    news articles
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary'>•</span>
                  <span>
                    Format code snippets and technical details properly
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary'>•</span>
                  <span>
                    Respect intellectual property and don&apos;t share private
                    or confidential information
                  </span>
                </li>
              </ul>
            </div>

            <div className='pt-4 flex justify-center'>
              <a href={APP.repoUrl} target='_blank' rel='noopener noreferrer'>
                <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
                  <GitBranch className='mr-2 h-4 w-4' />
                  Contribute on GitHub
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='font-mono'>Community Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-gray-300 mb-6'>
              Need help with your contribution? Have questions about the
              project? Join our community channels to connect with other
              contributors and the project maintainers.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <a
                href='https://discord.gg/superteam'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-muted p-4 rounded-lg flex items-center gap-3 hover:bg-muted/70 transition-colors'
              >
                <div className='h-10 w-10 bg-[#5865F2]/20 rounded-full flex items-center justify-center'>
                  <i className='ri-discord-fill text-[#5865F2] text-xl'></i>
                </div>
                <div>
                  <h3 className='font-mono font-semibold'>Discord</h3>
                  <p className='text-sm text-gray-400'>
                    Join the Superteam Discord community
                  </p>
                </div>
              </a>

              <a
                href={APP.repoUrl + '/issues'}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-muted p-4 rounded-lg flex items-center gap-3 hover:bg-muted/70 transition-colors'
              >
                <div className='h-10 w-10 bg-white/10 rounded-full flex items-center justify-center'>
                  <i className='ri-github-fill text-white text-xl'></i>
                </div>
                <div>
                  <h3 className='font-mono font-semibold'>GitHub Issues</h3>
                  <p className='text-sm text-gray-400'>
                    Report issues or suggest features
                  </p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContributePage
