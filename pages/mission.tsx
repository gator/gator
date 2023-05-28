import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Mission: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Mission - Gator' />

      <img
        src='/mission_background.jpg'
        alt='mission_background'
        className='absolute top-0 object-cover h-full'
      />

      <main className='z-10 flex flex-col justify-center h-full text-center top-1/2'>
        <h1 className='text-6xl font-black tracking-wider mb-14'>
          The Mission.
        </h1>
        <p className='text-xl'>
          The best care someone can receive is when the care giver is cared for
          too. Helping the helpers goes a long way in the success of Health
          Care.
        </p>
        <p className='mt-4 text-xl'>Help Everyone.</p>
      </main>
    </>
  )
}

Mission.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Mission
