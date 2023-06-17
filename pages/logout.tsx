import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { motion } from 'framer-motion'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/router'

const Logout: NextPageWithLayout = () => {
  const { signOut } = useAuth()
  const router = useRouter()

  signOut().then(() => router.push('/'))

  return (
    <>
      <SEO title='Logout - Gator' />

      <main className='h-full text-black bg-white'>
        <motion.h1
          className='mt-40 text-6xl font-black text-center md:text-left'
          initial={{ translateX: -15 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1 }}
        >
          Logging out...
        </motion.h1>
      </main>
    </>
  )
}

Logout.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Logout
