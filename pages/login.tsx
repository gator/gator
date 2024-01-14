import SEO from '../components/seo'
import { SignIn, useAuth, useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { dark } from '@clerk/themes'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Login = () => {
  const { isLoaded, isSignedIn } = useAuth()
  const { signIn, setActive } = useSignIn()
  const router = useRouter()
  const [loginWithGuest, setLoginWithGuest] = useState(false)

  if (!isLoaded) return null

  if (isSignedIn) {
    router.push('/apps')
    return null
  }

  const redirect =
    new URLSearchParams(window.location.search).get('redirect_url') ?? '/'

  async function guestLogin() {
    if (!signIn || !setActive || loginWithGuest) return null
    setLoginWithGuest(true)

    const token_request = await fetch(
      'https://gator-scribe.azurewebsites.net/api/get_guest_login_token'
    )
    const json = await token_request.json()

    const res = await signIn.create({
      strategy: 'ticket',
      ticket: json.token
    })

    try {
      setActive({
        session: res.createdSessionId
      })
    } catch (error) {
      console.log('Error:', error)
    }
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
          <button
            className={`px-6 py-2 mb-10 duration-100 rounded-xl text-white/50 bg-[#19191a] ${
              !loginWithGuest && 'hover:text-white'
            }`}
            onClick={guestLogin}
            disabled={loginWithGuest}
          >
            Login as Ali (Guest)
          </button>
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
