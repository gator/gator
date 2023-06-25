import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { motion } from 'framer-motion'
import { SignIn, useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/router'

const Login: NextPageWithLayout = () => {
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

      <main className='h-full text-black bg-white'>
        <motion.h1
          className='mt-40 text-6xl font-black text-center md:text-left'
          initial={{ translateX: -15 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1 }}
        >
          Login.
        </motion.h1>

        <div className='flex justify-center mt-20'>
          <SignIn
            afterSignInUrl='/dashboard'
            appearance={{
              elements: {
                footerActionText: {
                  display: 'none'
                },
                footerActionLink: {
                  display: 'none'
                }
              }
            }}
          />
        </div>
      </main>
    </>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Login
