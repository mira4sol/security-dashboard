import AppLayout from '@/components/layout/AppLayout'
import type { Metadata } from 'next'
import { Providers } from '../contexts/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Superteam Security Dashboard',
  description:
    "Explore Solana security incidents, vulnerabilities and hacks. Learn from past exploits and strengthen your protocol's security.",
  keywords: [
    'Solana security',
    'blockchain security',
    'smart contract vulnerabilities',
    'crypto hacks',
    'DeFi security',
    'Solana exploits',
    'protocol security',
    'Web3 security',
    'blockchain exploits',
    'security incidents',
  ],
  icons: {
    icon: [
      {
        url: 'https://security.superteam.fun/assets/st_key.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    url: 'https://security.superteam.fun/',
    title: 'Superteam Security Dashboard',
    description:
      "Explore Solana security incidents, vulnerabilities and hacks. Learn from past exploits and strengthen your protocol's security.",
    images: [
      {
        url: 'https://security.superteam.fun/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Superteam Security Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://security.superteam.fun/',
    title: 'Superteam Security Dashboard',
    description:
      "Explore Solana security incidents, vulnerabilities and hacks. Learn from past exploits and strengthen your protocol's security.",
    images: [
      {
        url: 'https://security.superteam.fun/og-image.jpg',
        alt: 'Superteam Security Dashboard',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  )
}
