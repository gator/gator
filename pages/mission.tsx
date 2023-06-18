import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { motion } from 'framer-motion'

const Mission: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Mission - Gator' />

      <img
        src='/mission_background.jpg'
        alt='mission_background'
        className='absolute top-0 object-cover w-full h-full'
      />

      <main className='z-10 flex flex-col h-full text-center text-white sm:justify-center'>
        <motion.h1
          className='mt-32 text-6xl font-black tracking-wider mb-14 sm:mt-0'
          initial={{ translateY: 10 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Mission.
        </motion.h1>
        <motion.p
          className='text-xl'
          initial={{ translateY: 15 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.75 }}
        >
          The best care someone can receive is when the care giver is cared for
          too. Helping the helpers goes a long way in the success of Health
          Care.
        </motion.p>
        <motion.p
          className='mt-4 text-xl'
          initial={{ translateY: 20 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1 }}
        >
          Help Everyone.
        </motion.p>
      </main>
    </>
  )
}

Mission.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Mission
