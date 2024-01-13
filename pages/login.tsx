import SEO from '../components/seo'
import { SignIn, useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { dark } from '@clerk/themes'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  if (!isLoaded) return null

  if (isSignedIn) {
    router.push('/dashboard')
    return null
  }

  return (
    <>
      <SEO title='Login - Gator' />

      <main className='flex h-screen'>
        <div className='relative w-full overflow-hidden bg-zinc-900'>
          <h1 className='m-10 text-3xl font-bold text-zinc-500'>GATOR</h1>

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
          />
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
