import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { motion } from 'framer-motion'

const Login: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Login - Gator' />

      <main className='h-full text-black bg-white'>
        <motion.h1
          className='mt-40 text-6xl font-black'
          initial={{ translateX: -15 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1 }}
        >
          Login.
        </motion.h1>
        <motion.p
          className='mt-10 text-xl text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1.5 }}
        >
          🏗️ Workin' on it
        </motion.p>
      </main>
    </>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Login
