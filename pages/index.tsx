import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SEO />

      <video
        src='/gator_background_video.mp4'
        muted
        autoPlay
        loop
        className='z-0 object-cover h-full'
        onContextMenu={() => false}
      />

      <main className='absolute z-10 flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-5xl font-bold'>Health Care Helps Everyone.</h1>
        <Link
          href='/join'
          className='flex items-center gap-1 px-6 py-4 mt-5 text-2xl group'
        >
          Start Helping
          <ChevronRightIcon className='w-6 h-6 duration-100 group-hover:translate-x-1' />
        </Link>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
