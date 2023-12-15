import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import ContactForm from '../components/contactForm'

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

        <section className='bg-[#f2f2f7] mt-40 pt-16 pb-32' id='features'>
          <h1 className='mb-10 text-5xl font-bold text-center'>Features</h1>
          <div className='flex flex-wrap justify-center gap-4'>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>Ambient Recognition</h2>
              <p className='opacity-75'>
                Gator Scribe listens to your conversation with the patient
                through your mobile phone for all its functionality.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>Specialty Agnostic</h2>
              <p className='opacity-75'>
                No matter the specialty you practice, Gator Scribe is able to
                pick up on your orally-directed findings and document them.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>Multilingual*</h2>
              <p className='opacity-75'>
                Have multiple languages be used in the same conversation and
                still have a documented clinical note in English.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>
                Multi-Recording Instances
              </h2>
              <p className='opacity-75'>
                Temporarily pause recording if you need to exit the room (e.g.
                re-review X-rays) and resume the recording once you are ready to
                talk with the patient again.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>
                HPI Suggested Questions
              </h2>
              <p className='opacity-75'>
                Get suggested questions to ask the patient during the encounter
                to get a better history based upon the current context.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>Differential Diagnosis</h2>
              <p className='opacity-75'>
                Based upon the current context of the encounter, a differential
                diagnosis will be supplied.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>Clinical Note</h2>
              <p className='opacity-75'>
                After the encounter has ended, a clinical note with important
                indications will be created in less than one minute.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>ICD-10 Charge Codes</h2>
              <p className='opacity-75'>
                Suggested ICD-10 Charge Codes that could apply to the encounter
                will be listed to increase revenue for your institution.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>Suggested Medication</h2>
              <p className='opacity-75'>
                Medication, prescribed or non-prescribed, will be suggested if
                it applies to the encounter.
              </p>
            </div>
            <div className='p-4 bg-white rounded-lg shadow max-w-[40%]'>
              <h2 className='mb-4 text-lg font-bold'>EHR Integration*</h2>
              <p className='opacity-75'>
                Have the clinical notes from the encounters populated into your
                organization existing EHR for an even more streamlined approach.
              </p>
            </div>
          </div>
          <p className='mt-10 text-sm text-center opacity-50'>
            * being worked on
          </p>
        </section>

        <section className='bg-[#34c759] text-white flex items-center space-x-40 py-10'>
          <div>
            <h1 className='mb-10 text-5xl font-bold'>Online Dashboard</h1>
            <p className='text-lg font-light'>
              Gator Scribe comes with an online web dashboard where you are able
              to see your recent cases and copy the generated clinical note to
              your EHR. You can use Gator's dashboard to view generated clinical
              notes or integrate with one of the EHRs below.
            </p>
            <div>
              <img src='/images/epic.png' alt='epic' className='w-auto h-10' />
              <img
                src='/images/cerner.png'
                alt='cerner'
                className='w-auto h-10'
              />
            </div>
          </div>
          <img
            src='/images/dashboard_sample.png'
            alt='dashboard'
            className='overflow-x-hidden h-96'
          />
        </section>

        <section className='bg-[#e5ffea] pt-32' id='contact'>
          <h1 className='text-5xl font-bold text-center'>Contact</h1>
          <p>
            If you are interested in licensing or learning more about Gator
            Scribe, fill out the form below and we will reach out to your
            organization.
          </p>
          <ContactForm />
        </section>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
