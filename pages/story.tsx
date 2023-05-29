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

      <img
        src='/story_background.jpg'
        alt='story_background'
        className='absolute top-0 object-cover h-full'
      />

      <main className='z-10 h-full'>
        <motion.h1
          className='mt-40 text-6xl font-black tracking-wider text-center mb-14 md:text-left'
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
          During his journey to becoming a surgeon, Vijay Stroup encountered a
          significant obstacle while volunteering at a local hospital. He
          observed the caregivers struggling with a specific software
          application, which led to their frustration. Determined to find a
          solution, Vijay dedicated his time outside of his volunteer shifts to
          tackle the problem. After much effort, he successfully developed a
          solution and eagerly shared it with the hospital staff, who were
          elated with the outcome.
        </motion.p>

        <motion.p
          className='mt-4 text-xl'
          initial={{ translateY: -20 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1 }}
        >
          Motivated by this experience, Vijay delved deeper into the healthcare
          industry, exploring not only direct patient care but also the various
          mechanisms that support the industry as a whole. During his
          exploration, he stumbled upon a pressing issue:{' '}
          <Link
            href='https://www.ahrq.gov/prevention/clinician/ahrq-works/burnout/index.html'
            rel='noopener noreferrer'
            target='_blank'
            className='underline'
          >
            Physician Burnout.
          </Link>{' '}
          Extensive research revealed that more than 50% of physicians were
          experiencing burnout, largely due to the excessive administrative work
          they had to handle alongside their patient care responsibilities.
        </motion.p>

        <motion.p
          className='mt-4 text-xl'
          initial={{ translateY: -25 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1.25 }}
        >
          Realizing the need for change, Vijay embarked on a mission to improve
          the healthcare system, not just for patients but also for the
          caregivers themselves. His goal was to alleviate the burden on
          physicians and promote better patient care by addressing the causes of
          burnout and providing assistance to those in need.
        </motion.p>
      </main>
    </>
  )
}

Story.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Story
