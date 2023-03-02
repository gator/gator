import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Solutions: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Solutions - Gator' />

      <main className='flex flex-col'>
        <h1 className='text-2xl font-black text-center'>Solutions</h1>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10' />

        <div className='mt-10 space-y-10'>
          <div className='flex justify-between space-x-4'>
            <img src='/bednotes_logo.png' className='w-14 h-14' />
            <div className=''>
              <h2 className='text-lg font-bold'>Bed Notes</h2>
              <p>
                Bed Notes is an application to visualize your unit quickly.
                Front-line workers can quickly access critical information and
                real-time updates, saving valuable time and increasing
                efficiency. This means less communication time, improved patient
                care, and higher satisfaction rates.
              </p>
              <a
                href='https://bednotes.gator.sh'
                target='_blank'
                className='text-blue-500 hover:underline'
              >
                Learn More
              </a>
            </div>
          </div>
          <div className='flex justify-between space-x-4'>
            <img src='/Alligator2.png' className='w-14 h-14' />
            <div className=''>
              <h2 className='text-lg font-bold'>Jonathan</h2>
              <p>
                Jonathan is an AI assistant to help physicians and medical
                professionals streamline the process of note-taking during
                patient visits. By listening to the interaction between doctors
                and patients, our software takes notes, summarizes the
                conversation, and generates an accurate and comprehensive
                report. With its advanced natural language processing and
                machine learning capabilities, our tool can identify key
                information, such as diagnoses, medications, and treatment
                plans, and ensure that they are properly documented in the
                patient's medical record. By eliminating the need for manual
                note-taking and reducing the risk of errors or omissions,
                Jonathan can help doctors save time, improve accuracy, and
                enhance the quality of care for their patients.
              </p>
              <p className='text-blue-500 hover:underline'>
                Coming Soon...{' '}
                <span>
                  <Link href='/contact'>(Contact us for updates.)</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

Solutions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Solutions
