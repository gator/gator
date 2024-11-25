import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Image from 'next/image'
import { NavItems } from '@/components/nav-items'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ClerkProvider } from '@clerk/nextjs'
import { LoginButton } from '@/components/LoginButton'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Gator',
  description:
    'Gator provides innovative software solutions that promote the advancement of technology in the healthcare industry. Our tailored, reliable, and scalable products empower healthcare professionals and organizations to streamline operations, enhance patient care, and achieve better outcomes.',
  openGraph: {
    title: 'Gator',
    description:
      'Gator provides innovative software solutions that promote the advancement of technology in the healthcare industry. Our tailored, reliable, and scalable products empower healthcare professionals and organizations to streamline operations, enhance patient care, and achieve better outcomes.',
    images: [
      {
        url: 'https://gator.sh/gator_og.png',
        width: 900,
        height: 500,
        alt: 'Gator'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      publishableKey={
        process.env.NODE_ENV === 'development'
          ? 'pk_test_cHJlcGFyZWQtb2FyZmlzaC02Mi5jbGVyay5hY2NvdW50cy5kZXYk'
          : 'pk_live_Y2xlcmsuZ2F0b3Iuc2gk'
      }
    >
      <html lang='en' suppressHydrationWarning>
        <body
          className={cn(
            'dark min-h-screen bg-[#000500] font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <header className='flex items-center justify-between mt-5 lg:mt-16 mb-16 lg:mb-32 mx-5 lg:mx-48'>
              <div
                style={{
                  zIndex: -10,
                  position: 'absolute',
                  width: '100%',
                  height: '500px',
                  left: '0',
                  top: '-250px',
                  background:
                    'radial-gradient(50% 50% at 50% 50%, rgba(0, 90, 0, 0.1) 0%, rgba(0, 5, 0, 0) 100%)'
                }}
              />
              <div className='w-full'>
                <Link href='/' className='flex space-x-3 items-center w-fit'>
                  <Image
                    src='/gator_logo.png'
                    alt='Gator Logo'
                    width={35}
                    height={35}
                    priority
                    draggable={false}
                  />
                  <h1 className='uppercase font-black text-3xl hidden sm:block'>
                    GATOR
                  </h1>
                </Link>
              </div>

              <NavItems />

              <div className='w-full flex justify-end space-x-2'>
                <LoginButton />

                {/* mobile nav */}
                <Dialog>
                  <DialogTrigger asChild className='md:hidden'>
                    <Button variant='outline' className='bg-green-500/10'>
                      &#9776;
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='h-full w-full'>
                    <div className='space-y-5'>
                      <div>
                        <p className='mb-2'>Solutions</p>
                        <ul className='flex flex-col space-y-2'>
                          <DialogClose asChild>
                            <Link
                              href='https://scribe.gator.sh'
                              className='bg-green-500 text-white font-bold hover:bg-green-600 p-5 rounded-md'
                            >
                              Scribe
                            </Link>
                          </DialogClose>
                        </ul>
                      </div>

                      <div>
                        <p className='mb-2'>Company</p>
                        <ul className='flex flex-col space-y-2'>
                          <DialogClose asChild>
                            <Link
                              href='/company'
                              className='bg-green-500 text-white font-bold hover:bg-green-600 p-5 rounded-md'
                            >
                              Company
                            </Link>
                          </DialogClose>
                        </ul>
                      </div>
                    </div>

                    <DialogFooter className='sm:justify-start'>
                      <DialogClose asChild>
                        <Button
                          type='button'
                          variant='secondary'
                          className='bg-green-500/10'
                        >
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </header>

            {children}

            <footer className='mt-32 lg:mt-60 text-sm flex flex-col items-center space-y-4 pb-10'>
              <p className='flex items-center '>
                <span className='mr-4'>
                  <Image
                    src='/us_flag.svg'
                    alt='US Flag'
                    width={30}
                    height={30}
                    draggable={false}
                    className='w-auto'
                  />
                </span>
                Made in Florida
              </p>
              <nav className='space-x-10'>
                <Link href='/terms'>Terms</Link>
                <Link href='/privacy'>Privacy</Link>
              </nav>
              <p>&copy; Gator Technologies, LLC</p>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
