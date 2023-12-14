import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <SEO />

      <main>
        <section className='relative bg-[url(/images/hero_wiggle.svga)] bg-[#E5FFEA] h-[75vh]'>
          <h1>Meet Ali.</h1>
          <h2>
            Ali helps you swim through the murky waters of Healthcare by helping
            you document clinical encounters.
          </h2>
          <div>
            <Link href='/login'>
              <button>Start Swimming</button>
            </Link>
            <Link href='/login'>
              <button>Learn More</button>
            </Link>
          </div>
          <Image
            src='/images/landing_image.png'
            width={500}
            height={500}
            alt='landing_image'
            className='mt-50'
          />
        </section>

        <section className='mt-24'>
          <h1 className='mb-20 text-center opacity-50'>Our Partners</h1>
          <div className='flex justify-evenly'>
            <Link href='#'>
              <img
                src='/images/Microsoft_logo_(2012).png'
                alt='microsoft'
                className='w-auto h-10'
              />
            </Link>
            <Link href='#'>
              <img
                src='/images/fl_hightech.png'
                alt='the florida high tech corridor'
                className='w-auto h-10'
              />
            </Link>
            <Link href='#'>
              <img
                src='/images/cenfluence.png'
                alt='cenfluence'
                className='w-auto h-10'
              />
            </Link>
          </div>
        </section>

        <section
          className='flex flex-col items-center gap-60 mt-60'
          id='how-it-works'
        >
          <div className='flex items-center gap-20'>
            <img
              src='/images/how-it-works/start.svg'
              alt='start'
              className='w-auto h-96'
            />
            <div>
              <p>
                <span className='text-blue-500'>⎯⎯⎯</span> Walk In
              </p>
              <h2 className='mt-2 mb-8 text-6xl font-bold'>Start Encounter</h2>
              <p className='opacity-50'>
                Once you have entered the room and greeted the patient, start
                recording the clinical encounter.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-20'>
            <div>
              <p>
                <span className='text-blue-500'>⎯⎯⎯</span> Consult Patient
              </p>
              <h2 className='mt-2 mb-8 text-6xl font-bold'>Get Suggestions</h2>
              <p className='opacity-50'>
                As you are speaking with the patient, periodically get suggested
                questions to ask the patient and a differential diagnosis
                relevant to the current context of the conversation.
              </p>
            </div>
            <img
              src='/images/how-it-works/consult.svg'
              alt='consult'
              className='w-auto h-96'
            />
          </div>
          <div className='flex items-center gap-20'>
            <img
              src='/images/how-it-works/relax.svg'
              alt='relax'
              className='w-auto h-96'
            />
            <div>
              <p>
                <span className='text-blue-500'>⎯⎯⎯</span> Sit Back
              </p>
              <h2 className='mt-2 mb-8 text-6xl font-bold'>Relax</h2>
              <p className='opacity-50'>
                Once you have finished your encounter and stopped recording, Al
                will have finished creating your note before you are able to sit
                back down in your office.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
