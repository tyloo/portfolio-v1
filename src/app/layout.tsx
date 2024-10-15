import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/sections/header'
import { cn } from '@/lib/utils'
import Footer from '@/components/sections/footer'
import { Playfair_Display } from 'next/font/google'

const fontSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-sans',
  weight: '100 900'
})
const fontMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-mono',
  weight: '100 900'
})
const fontSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: "Portfolio of Julien 'Tyloo' Bonvarlet",
  description:
    "Portfolio of Julien 'Tyloo' Bonvarlet. It contains all my projects, experiences, skills and a blog where I share my thoughts and ideas."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
          fontSerif.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
