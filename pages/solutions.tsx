import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Solutions: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Solutions - Gator' />

      <main className='flex flex-col'>
        <h1 className='text-2xl font-bold text-center'>Solutions</h1>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10' />

        <div className='space-y-10'>
          <div className='flex justify-between space-x-4'>
            <img src='/Alligator2.png' className='w-14 h-14' />
            <div className=''>
              <h2 className='text-lg font-bold'>Bed Notes</h2>
              <p>
                Bed Notes is a cloud-based solution that streamlines the process
                of creating and managing patient care plans. It is designed to
                help healthcare professionals create, edit, and share care plans
                with their colleagues and patients. Bed Notes is a powerful tool
                that enables healthcare professionals to improve patient care
                and outcomes, while reducing the time and effort required to
                create and manage care plans.
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
              <h2 className='text-lg font-bold'>Bed Notes</h2>
              <p>
                Bed Notes is a cloud-based solution that streamlines the process
                of creating and managing patient care plans. It is designed to
                help healthcare professionals create, edit, and share care plans
                with their colleagues and patients. Bed Notes is a powerful tool
                that enables healthcare professionals to improve patient care
                and outcomes, while reducing the time and effort required to
                create and manage care plans.
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
        </div>
      </main>
    </>
  )
}

Solutions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Solutions
