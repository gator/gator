import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SEO />

      <video
        src='/gator_background_video.mp4'
        muted
        autoPlay
        loop
        className='object-cover h-full'
        onContextMenu={() => false}
      />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
