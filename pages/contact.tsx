import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import Layout from '../components/layout'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact - Gator</title>
      </Head>

      <main className='flex flex-col items-center space-y-4'>
        <div className='flex items-center space-x-2'>
          <EnvelopeIcon className='w-6 h-6' />
          <p className='text-2xl'>contact@gator.sh</p>
        </div>
        <div className='flex items-center space-x-2'>
          <PhoneIcon className='w-6 h-6' />
          <p className='text-2xl'>+1 (321) 430-8534</p>
        </div>
      </main>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact
