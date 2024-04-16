import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Image from 'next/image'
import { NavItems } from '@/components/nav-items'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
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
          'dark min-h-screen bg-[#000500] font-sans antialiased mx-60',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <header className='flex items-center justify-between mt-16 mb-32'>
            <div
              style={{
                zIndex: -10,
                position: 'absolute',
                width: '1440px',
                height: '500px',
                left: 'calc(50% - 1440px/2)',
                top: '-250px',
                background:
                  'radial-gradient(50% 50% at 50% 50%, rgba(0, 90, 0, 0.1) 0%, rgba(0, 5, 0, 0) 100%)'
              }}
            />
            <Link href='/' className='flex space-x-3 items-center w-full'>
              <Image
                src='/gator_logo.png'
                alt='Gator Logo'
                width={35}
                height={35}
                priority
              />
              <h1 className='uppercase font-black text-3xl'>GATOR</h1>
            </Link>
            <NavItems />
            <div className='w-full flex justify-end'>
              <Button
                asChild
                className='bg-green-500 text-white font-bold hover:bg-green-600 h-8'
              >
                <Link href='/login'>Login</Link>
              </Button>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
