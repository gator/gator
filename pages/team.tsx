import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Team: NextPageWithLayout = () => {
  return (
    <>
      <SEO title='Team - Gator' />

      <main className='flex flex-col'>
        <h1 className='text-2xl font-bold text-center'>Team</h1>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10' />

        <div className='flex flex-col items-center justify-center mt-20 gap-28 sm:flex-row'>
          <div>
            <img src='/Alligator2.png' alt='Team' className='mb-4 w-28 h-28' />
            <div className='flex justify-between'>
              <h3 className='text-sm text-black/50'>Founder</h3>
              <a
                href='https://www.linkedin.com/in/vijaystroup/'
                target='_blank'
              >
                <span className='sr-only'>LinkedIn</span>
                <img
                  src='/linkedin_icon.svg'
                  className='w-5 h-5 opacity-50 hover:opacity-100'
                />
              </a>
            </div>
            <h2 className='text-xl font-bold'>Vijay Stroup</h2>
            <p className='italic'>I like making stuff.</p>
          </div>

          <div>
            <Link href='/careers'>
              <div className='cursor-pointer'>
                <img
                  src='/Alligator2.png'
                  alt='Team'
                  className='mb-4 w-28 h-28'
                />
                <h3 className='text-sm text-black/50'>__________</h3>
                <h2 className='text-xl font-bold'>You</h2>
                <p className='italic'>Could be you!</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

Team.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Team
