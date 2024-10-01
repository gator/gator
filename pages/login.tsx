import SEO from '../components/seo'
import { SignIn, useAuth, useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { dark } from '@clerk/themes'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Login = () => {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()
  const [loginWithGuest, setLoginWithGuest] = useState(false)

  if (!isLoaded) return null

  const redirect =
    new URLSearchParams(window.location.search).get('redirect_url') ?? '/apps'

  if (isSignedIn) {
    router.push(redirect ? redirect : '/apps')
    return null
  }

  return (
    <>
      <SEO title='Login - Gator' />

      <main className='flex h-screen'>
        <div className='relative w-full overflow-hidden bg-zinc-900'>
          <Link href='/'>
            <h1 className='m-10 text-3xl font-bold text-zinc-500'>GATOR</h1>
          </Link>

          <div className='flex justify-center'>
            <Image
              src='/images/logos/ali.png'
              alt='dashboard'
              className='absolute -bottom-44'
              height={600}
              width={600}
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full bg-zinc-950'>
          <div className='mb-4 text-zinc-800 group hover:text-white transition-colors'>
            <p className='text-center text-xs underline'>Demo Credentials</p>
            <p className='text-sm'>Email: ali.gator@gator.sh</p>
            <p className='text-sm'>Password: ilovegators123</p>
          </div>
          <div className='mx-5'>
            <SignIn
              appearance={{
                baseTheme: dark,
                elements: {
                  footer: {
                    display: 'none'
                  },
                  logoImage: {
                    display: 'none'
                  },
                  header: {
                    transform: 'translateY(-70px)'
                  }
                }
              }}
              redirectUrl={redirect}
            />
          </div>
          <p className='mt-10 text-xs text-zinc-500'>
            By logging in, you agree to our{' '}
            <Link href='/terms-of-use' className='underline'>
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href='/privacy-policy' className='underline'>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  )
}

export default Login
