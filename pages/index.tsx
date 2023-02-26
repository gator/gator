import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SEO />

      <div
        className='absolute w-full bg-center bg-repeat mt-52 h-4/5 -z-10 sm:mt-12'
        style={{ backgroundImage: 'url("/home_background.svg")' }}
      ></div>

      <main className='p-1 pb-5 mx-auto text-center bg-white rounded-full w-fit'>
        <h1 className='mt-24 text-5xl font-black'>No Crocodile Tears</h1>
        <h2 className='mt-5 text-xl font-semibold'>
          Innovative software solutions to power the next-generation of
          healthcare.
        </h2>

        <Link href='/solutions'>
          <button className='mt-5 outline outline-2 text-xl p-2 text-white rounded-md bg-gradient-to-br from-[#97E368] to-[#73BC47] w-fit font-bold'>
            See our Solutions
          </button>
        </Link>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
