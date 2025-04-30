'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  AlertTriangle,
  Book,
  BookOpen,
  CheckCircle,
  Code,
  FileCode,
  Shield,
} from 'lucide-react'

const ResourcesPage = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='gradient-circle h-[800px] w-[800px] absolute top-0 left-1/2 -translate-x-1/2'></div>
      </div>

      <header className='relative z-10 p-6 border-b border-border'>
        <h1 className='text-2xl font-mono font-bold'>Resources</h1>
        <p className='text-gray-400 text-sm'>
          Security guides and best practices
        </p>
      </header>

      <div className='relative z-10 p-6 max-w-6xl mx-auto'>
        <Tabs defaultValue='guides' className='w-full'>
          <TabsList className='mb-6 bg-muted/50'>
            <TabsTrigger value='guides' className='font-mono'>
              Security Guides
            </TabsTrigger>
            <TabsTrigger value='tools' className='font-mono'>
              Security Tools
            </TabsTrigger>
            <TabsTrigger value='learning' className='font-mono'>
              Learning Resources
            </TabsTrigger>
            <TabsTrigger value='checklist' className='font-mono'>
              Security Checklist
            </TabsTrigger>
          </TabsList>

          <TabsContent value='guides' className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <Card className='bg-card border-border hover:border-primary/50 transition-colors'>
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <Badge variant='secondary' className='mb-2'>
                      For Developers
                    </Badge>
                    <Shield className='h-5 w-5 text-primary' />
                  </div>
                  <CardTitle className='text-base font-mono'>
                    Solana Program Security Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-gray-400 mb-4'>
                    Comprehensive guide to writing secure Solana programs,
                    covering common vulnerabilities and best practices.
                  </p>
                  <a
                    href='https://github.com/coral-xyz/sealevel-attacks'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button variant='terminal' size='sm' className='w-full'>
                      Read Guide
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className='bg-card border-border hover:border-primary/50 transition-colors'>
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <Badge variant='secondary' className='mb-2'>
                      For Protocols
                    </Badge>
                    <Shield className='h-5 w-5 text-primary' />
                  </div>
                  <CardTitle className='text-base font-mono'>
                    Security Incident Response Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-gray-400 mb-4'>
                    How to prepare and respond to security incidents in the
                    Solana ecosystem, including templates and procedures.
                  </p>
                  <a
                    href='https://solana.com/developers'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button variant='terminal' size='sm' className='w-full'>
                      View Plan
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className='bg-card border-border hover:border-primary/50 transition-colors'>
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <Badge variant='secondary' className='mb-2'>
                      For Users
                    </Badge>
                    <Shield className='h-5 w-5 text-primary' />
                  </div>
                  <CardTitle className='text-base font-mono'>
                    Wallet Security Best Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-gray-400 mb-4'>
                    Essential security practices for Solana wallet users,
                    including key management and phishing prevention.
                  </p>
                  <a
                    href='https://solana.com/ecosystem'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button variant='terminal' size='sm' className='w-full'>
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card className='mt-6'>
              <CardHeader>
                <CardTitle className='font-mono'>
                  Common Solana Vulnerabilities
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='p-4 bg-muted/50 rounded-lg'>
                  <h3 className='font-mono font-semibold mb-2 flex items-center'>
                    <FileCode className='h-4 w-4 mr-2 text-secondary' />
                    Signature Spoofing
                  </h3>
                  <p className='text-sm text-gray-300 mb-3'>
                    Occurs when an attacker is able to bypass signature
                    verification on an instruction, allowing unauthorized
                    transactions.
                  </p>
                  <div className='bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto text-gray-300'>
                    <pre>{`// Vulnerable code pattern
if (pubkey.equals(expectedSigner)) { 
  // proceed with transaction
}`}</pre>
                  </div>
                  <div className='mt-3'>
                    <h4 className='text-sm font-semibold mb-1'>Prevention:</h4>
                    <p className='text-xs text-gray-400'>
                      Always verify signatures using Solana&apos;s native
                      signature verification functions. Never rely on manual
                      comparison without cryptographic verification.
                    </p>
                  </div>
                </div>

                <div className='p-4 bg-muted/50 rounded-lg'>
                  <h3 className='font-mono font-semibold mb-2 flex items-center'>
                    <FileCode className='h-4 w-4 mr-2 text-secondary' />
                    Account Validation Failures
                  </h3>
                  <p className='text-sm text-gray-300 mb-3'>
                    When a program doesn&apos;t properly validate the ownership
                    or properties of accounts, allowing attackers to supply
                    malicious accounts.
                  </p>
                  <div className='bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto text-gray-300'>
                    <pre>{`// Missing ownership check
function process(account) {
  // directly use account data without ownership validation
}`}</pre>
                  </div>
                  <div className='mt-3'>
                    <h4 className='text-sm font-semibold mb-1'>Prevention:</h4>
                    <p className='text-xs text-gray-400'>
                      Always verify account ownership, check all account
                      relationships, and validate account data before processing
                      transactions.
                    </p>
                  </div>
                </div>

                <div className='p-4 bg-muted/50 rounded-lg'>
                  <h3 className='font-mono font-semibold mb-2 flex items-center'>
                    <FileCode className='h-4 w-4 mr-2 text-secondary' />
                    Price Oracle Manipulation
                  </h3>
                  <p className='text-sm text-gray-300 mb-3'>
                    Occurs when attackers manipulate price feeds used by lending
                    protocols to create artificial price movements.
                  </p>
                  <div className='bg-muted p-3 rounded-md font-mono text-xs overflow-x-auto text-gray-300'>
                    <pre>{`// Vulnerable approach
function calculateLTV(asset, price) {
  // using price without validation or time-weighted checks
  return assetAmount * price;
}`}</pre>
                  </div>
                  <div className='mt-3'>
                    <h4 className='text-sm font-semibold mb-1'>Prevention:</h4>
                    <p className='text-xs text-gray-400'>
                      Use time-weighted average prices (TWAP), implement circuit
                      breakers, and cross-check prices from multiple sources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='tools' className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Card className='bg-card border-border'>
                <CardHeader>
                  <CardTitle className='text-base font-mono'>
                    Audit Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                      <div className='h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center'>
                        <CheckCircle className='h-4 w-4 text-primary' />
                      </div>
                      <div>
                        <a
                          href='https://osec.io/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold hover:text-primary'
                        >
                          OtterSec
                        </a>
                        <p className='text-xs text-gray-400'>
                          Specialized Solana security auditing
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center'>
                        <CheckCircle className='h-4 w-4 text-primary' />
                      </div>
                      <div>
                        <a
                          href='https://www.kudelskisecurity.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold hover:text-primary'
                        >
                          Kudelski Security
                        </a>
                        <p className='text-xs text-gray-400'>
                          Comprehensive blockchain security services
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center'>
                        <CheckCircle className='h-4 w-4 text-primary' />
                      </div>
                      <div>
                        <a
                          href='https://halborn.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold hover:text-primary'
                        >
                          Halborn
                        </a>
                        <p className='text-xs text-gray-400'>
                          Blockchain security engineering
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center'>
                        <CheckCircle className='h-4 w-4 text-primary' />
                      </div>
                      <div>
                        <a
                          href='https://neodyme.io/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold hover:text-primary'
                        >
                          Neodyme
                        </a>
                        <p className='text-xs text-gray-400'>
                          Solana-focused security consultancy
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='bg-card border-border'>
                <CardHeader>
                  <CardTitle className='text-base font-mono'>
                    Testing & Verification Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                      <div className='h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center'>
                        <Code className='h-4 w-4 text-secondary' />
                      </div>
                      <div>
                        <a
                          href='https://github.com/coral-xyz/anchor'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold hover:text-secondary'
                        >
                          Anchor Framework
                        </a>
                        <p className='text-xs text-gray-400'>
                          Secure Solana program development framework
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center'>
                        <Code className='h-4 w-4 text-secondary' />
                      </div>
                      <div>
                        <a
                          href='https://github.com/solana-labs/solana-program-library'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold hover:text-secondary'
                        >
                          Solana Program Library
                        </a>
                        <p className='text-xs text-gray-400'>
                          Reference implementations and secure building blocks
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center'>
                        <Code className='h-4 w-4 text-secondary' />
                      </div>
                      <div>
                        <a
                          href='https://docs.solana.com/cli/deploy-a-program#testing-programs'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold hover:text-secondary'
                        >
                          Solana Program Test Framework
                        </a>
                        <p className='text-xs text-gray-400'>
                          Test Solana programs in simulated environments
                        </p>
                      </div>
                    </li>
                    <li className='flex items-center gap-2'>
                      <div className='h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center'>
                        <Code className='h-4 w-4 text-secondary' />
                      </div>
                      <div>
                        <a
                          href='https://github.com/solana-labs/solana-program-library/tree/master/token-lending/fuzz'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-semibold hover:text-secondary'
                        >
                          Fuzzing Tools
                        </a>
                        <p className='text-xs text-gray-400'>
                          Automated vulnerability discovery tools
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className='font-mono'>Bug Bounty Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-gray-300 mb-4'>
                  Participating in bug bounty programs can help secure the
                  Solana ecosystem while earning rewards. Here are some active
                  programs:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <a
                    href='https://immunefi.com/bounty/solana/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                  >
                    <div className='bg-muted p-4 rounded-lg hover:bg-muted/70 transition-colors'>
                      <h3 className='font-mono font-semibold mb-1'>
                        Solana Foundation
                      </h3>
                      <p className='text-xs text-gray-400'>
                        Up to $1,000,000 for critical vulnerabilities
                      </p>
                    </div>
                  </a>

                  <a
                    href='https://immunefi.com/explore/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                  >
                    <div className='bg-muted p-4 rounded-lg hover:bg-muted/70 transition-colors'>
                      <h3 className='font-mono font-semibold mb-1'>
                        Solana Ecosystem Projects
                      </h3>
                      <p className='text-xs text-gray-400'>
                        Various projects offer bounties on Immunefi
                      </p>
                    </div>
                  </a>

                  <a
                    href='https://hackerone.com/solana'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block'
                  >
                    <div className='bg-muted p-4 rounded-lg hover:bg-muted/70 transition-colors'>
                      <h3 className='font-mono font-semibold mb-1'>
                        HackerOne Program
                      </h3>
                      <p className='text-xs text-gray-400'>
                        Alternative platform for vulnerability reporting
                      </p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='learning' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='font-mono'>
                  Educational Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <h3 className='font-mono font-semibold mb-3 flex items-center'>
                      <BookOpen className='h-4 w-4 mr-2 text-primary' />
                      Documentation & Guides
                    </h3>
                    <ul className='space-y-2'>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary'>•</span>
                        <a
                          href='https://docs.solana.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-secondary hover:underline'
                        >
                          Solana Documentation
                        </a>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary'>•</span>
                        <a
                          href='https://soldev.app/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-secondary hover:underline'
                        >
                          Solana Developer Resources
                        </a>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary'>•</span>
                        <a
                          href='https://solanacookbook.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-secondary hover:underline'
                        >
                          Solana Cookbook
                        </a>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary'>•</span>
                        <a
                          href='https://github.com/coral-xyz/sealevel-attacks'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-secondary hover:underline'
                        >
                          Sealevel Attacks (Common Vulnerabilities)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='font-mono font-semibold mb-3 flex items-center'>
                      <Book className='h-4 w-4 mr-2 text-primary' />
                      Tutorials & Courses
                    </h3>
                    <ul className='space-y-2'>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary'>•</span>
                        <a
                          href='https://solana.com/developers/guides'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-secondary hover:underline'
                        >
                          Official Solana Tutorials
                        </a>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary'>•</span>
                        <a
                          href='https://buildspace.so/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-secondary hover:underline'
                        >
                          Buildspace Solana Projects
                        </a>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary'>•</span>
                        <a
                          href='https://www.youtube.com/c/SolanaBuild'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-secondary hover:underline'
                        >
                          Solana YouTube Channel
                        </a>
                      </li>
                      <li className='flex items-start gap-2'>
                        <span className='text-primary'>•</span>
                        <a
                          href='https://solana.nft.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-secondary hover:underline'
                        >
                          Solana Development Courses
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator className='my-6' />

                <h3 className='font-mono font-semibold mb-3'>
                  Case Studies & Postmortems
                </h3>
                <div className='space-y-4'>
                  <div className='p-4 bg-muted/50 rounded-lg'>
                    <h4 className='font-semibold text-sm mb-1'>
                      Wormhole Bridge Exploit (Feb 2022)
                    </h4>
                    <p className='text-xs text-gray-300 mb-2'>
                      A detailed analysis of the $325M Wormhole bridge hack that
                      involved signature verification bypass.
                    </p>
                    <a
                      href='https://blog.chainalysis.com/reports/wormhole-hack-february-2022/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xs text-secondary hover:underline'
                    >
                      Read Analysis →
                    </a>
                  </div>

                  <div className='p-4 bg-muted/50 rounded-lg'>
                    <h4 className='font-semibold text-sm mb-1'>
                      Mango Markets Exploit (Oct 2022)
                    </h4>
                    <p className='text-xs text-gray-300 mb-2'>
                      How price oracle manipulation was used to drain $115M from
                      Mango Markets.
                    </p>
                    <a
                      href='https://hacken.io/research/defi-security/mango-markets-case-study-113m-exploit/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xs text-secondary hover:underline'
                    >
                      Read Analysis →
                    </a>
                  </div>

                  <div className='p-4 bg-muted/50 rounded-lg'>
                    <h4 className='font-semibold text-sm mb-1'>
                      Cashio Exploit (Mar 2022)
                    </h4>
                    <p className='text-xs text-gray-300 mb-2'>
                      Account validation flaw that led to $48M in losses for
                      Cashio.
                    </p>
                    <a
                      href='https://halborn.com/explained-the-cashio-hack-march-2022/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xs text-secondary hover:underline'
                    >
                      Read Analysis →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='checklist' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='font-mono'>
                  Solana Program Security Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-6'>
                  <div>
                    <h3 className='font-mono font-semibold mb-3 flex items-center'>
                      <AlertTriangle className='h-4 w-4 mr-2 text-yellow-500' />
                      Critical Security Checks
                    </h3>
                    <ul className='space-y-2'>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Signature Verification
                          </p>
                          <p className='text-xs text-gray-400'>
                            Verify all signatures cryptographically using
                            Solana&apos;s native functions
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Account Validation
                          </p>
                          <p className='text-xs text-gray-400'>
                            Validate ownership, type, and address of all
                            accounts before processing
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Signer Authorization
                          </p>
                          <p className='text-xs text-gray-400'>
                            Check that required signers are present for
                            privileged operations
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Arithmetic Overflow/Underflow
                          </p>
                          <p className='text-xs text-gray-400'>
                            Use checked math operations and validate all
                            calculations
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className='font-mono font-semibold mb-3 flex items-center'>
                      <Shield className='h-4 w-4 mr-2 text-primary' />
                      Secure Design Principles
                    </h3>
                    <ul className='space-y-2'>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Privilege Separation
                          </p>
                          <p className='text-xs text-gray-400'>
                            Separate privileged operations with different
                            authority requirements
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Defense in Depth
                          </p>
                          <p className='text-xs text-gray-400'>
                            Implement multiple layers of security controls
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>Fail Securely</p>
                          <p className='text-xs text-gray-400'>
                            Ensure errors result in secure outcomes, not
                            vulnerable states
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>Least Privilege</p>
                          <p className='text-xs text-gray-400'>
                            Grant minimal permissions necessary for operation
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className='font-mono font-semibold mb-3 flex items-center'>
                      <Code className='h-4 w-4 mr-2 text-secondary' />
                      Implementation Best Practices
                    </h3>
                    <ul className='space-y-2'>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Comprehensive Testing
                          </p>
                          <p className='text-xs text-gray-400'>
                            Test for both positive and negative cases, including
                            edge cases
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Use Proven Libraries
                          </p>
                          <p className='text-xs text-gray-400'>
                            Utilize audited and well-tested libraries like
                            Solana Program Library
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Security Code Review
                          </p>
                          <p className='text-xs text-gray-400'>
                            Perform regular code reviews with security focus
                          </p>
                        </div>
                      </li>
                      <li className='flex items-start gap-2'>
                        <div className='h-5 w-5 bg-muted rounded flex items-center justify-center mt-0.5'>
                          <CheckCircle className='h-3 w-3 text-primary' />
                        </div>
                        <div>
                          <p className='text-sm font-medium'>
                            Third-Party Audits
                          </p>
                          <p className='text-xs text-gray-400'>
                            Obtain professional security audits before
                            deployment
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='mt-8 p-4 bg-secondary/10 rounded-lg flex items-start gap-4'>
                  <div className='bg-secondary/20 p-2 rounded-full'>
                    <AlertTriangle className='h-5 w-5 text-secondary' />
                  </div>
                  <div>
                    <h3 className='font-mono font-semibold mb-2'>
                      Security Warning
                    </h3>
                    <p className='text-sm text-gray-300'>
                      This checklist is not exhaustive. Blockchain security is
                      complex and evolving rapidly. Always consult with security
                      experts and stay updated on the latest security practices
                      specific to the Solana ecosystem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ResourcesPage
