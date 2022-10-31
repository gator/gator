import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Gator</title>
        <meta name='description' content='Software company' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-center'>
        <div>
          <Image
            alt='Gator Logo'
            src='/Alligator2.png'
            width={300}
            height={300}
          />
        </div>
        <h1 className='mt-8 ml-2 font-bold text-transparent text-7xl font-WildLife bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400'>
          The Digital Swamp
        </h1>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
