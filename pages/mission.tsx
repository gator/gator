import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Mission: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Mission - Gator' />

      <main className='text-center'>
        <h1 className='text-2xl font-bold text-center'>Mission</h1>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10' />

        <p>
          Gator is dedicated to advancing healthcare technology through
          innovative software solutions. Our cutting-edge products empower
          healthcare professionals and organizations to streamline their
          operations, enhance patient care, and achieve better outcomes. With a
          deep understanding of the unique challenges and opportunities in the
          healthcare industry, we develop software that is tailored to the needs
          of our clients. Our team of experienced developers, designers, and
          healthcare experts work collaboratively to create intuitive, reliable,
          and scalable software that drives the evolution of the healthcare
          ecosystem. Whether you're looking to improve clinical workflows, or
          enhance patient engagement, Gator has the expertise and technology to
          help you achieve your goals.
        </p>

        <h2 className='mt-10 mb-2 text-lg font-bold'>Our Goals</h2>
        <hr className='w-24 h-1 mx-auto my-4 -translate-y-2 bg-gray-100 border-0 rounded md:my-8' />
        <ol className='space-y-4 font-bold tracking-wider'>
          <li>Simplicity.</li>
          <li>User Friendliness.</li>
          <li>Reliability.</li>
        </ol>
      </main>
    </>
  )
}

Mission.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Mission
