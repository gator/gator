import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Story: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Story - Gator' />

      {/* <img
        src='/mission_background.jpg'
        alt='mission_background'
        className='absolute top-0 object-cover h-full'
      /> */}

      <main className='z-10 h-full text-black bg-white top-1/2'>
        <motion.h1
          className='mt-40 text-6xl font-black tracking-wider mb-14'
          initial={{ translateY: -10 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Story.
        </motion.h1>
        <motion.p
          className='text-xl'
          initial={{ translateY: -15 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.75 }}
        >
          On his journey to becoming a surgeon, Vijay Stroup was volunteering at
          a local hospital when he would observe the frustrations of the care
          givers with a particular software application. After his volunteer
          shifts, he would go home and work on a solution to the problem. Upon
          completition, he showed many of the workers in the hosptial whom were
          all estatic.
        </motion.p>
        <motion.p
          className='mt-4 text-xl'
          initial={{ translateY: -20 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1 }}
        >
          Looking for more problems, Vijay dove deeper into Health Care - not
          just direct care to patients, but all the mechanisms that make the
          industry. A pressing issue he discovered was{' '}
          <Link
            href='https://www.ahrq.gov/prevention/clinician/ahrq-works/burnout/index.html'
            rel='noopener noreferrer'
            target='_blank'
            className='underline'
          >
            Physician Burnout
          </Link>
          . Further research suggeted over 50% of physicians are experiencing
          burnout and one of the major causes is extra administrative work they
          do apart from their direct care to patients.
        </motion.p>
        <motion.p
          className='mt-4 text-xl'
          initial={{ translateY: -25 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1.25 }}
        >
          It was time something changed. Vijay is now on a mission to not just
          help patients, but also the care givers that will lead to better
          patient care.
        </motion.p>
      </main>
    </>
  )
}

Story.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Story
