import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company - Gator'
}

export default function Page() {
  return (
    <main className='min-h-full px-5 lg:px-60'>
      <h1 className='text-2xl lg:text-3xl text-center lg:text-left'>
        Gator Company
      </h1>

      <section className='my-10 lg:my-14'>
        <h2 className='text-xl mb-3 text-[#9CC2A0]'>Overview</h2>
        <p>
          Gator provides innovative software solutions that promote the
          advancement of technology in the healthcare industry. Our tailored,
          reliable, and scalable products empower healthcare professionals and
          organizations to streamline operations, enhance patient care, and
          achieve better outcomes.
        </p>
      </section>

      <section className='my-10 lg:my-14'>
        <h2 className='text-xl mb-3 text-[#9CC2A0]'>Mission</h2>
        <p>
          Gator's mission is to reduce burnout for healthcare providers by
          providing software solutions that work alongside them. Having elegant,
          yet powerful solutions allow healthcare providers to spend more time
          focused on the patient rather than worrying about extraneous tasks
          unrelated directly to the patient's concerns.
        </p>
      </section>

      <section className='my-10 lg:my-14'>
        <h2 className='text-xl mb-3 text-[#9CC2A0]'>Founding Story</h2>
        <p>
          On his journey to becoming a surgeon, Vijay Stroup was volunteering at
          a local hospital when he would observe the frustrations of the
          caregivers with a particular software application. After his volunteer
          shifts, he would go home and work on a solution to the problem. Upon
          completion, he showed many of the workers in the hospital who were all
          ecstatic. Looking for more problems, Vijay dove deeper into Health
          Care - not just direct care to patients, but all the mechanisms that
          make the industry. A pressing issue he discovered was{' '}
          <Link
            href='https://www.ahrq.gov/prevention/clinician/ahrq-works/burnout/index.html'
            rel='noopener noreferrer'
            target='_blank'
            className='underline'
          >
            Physician Burnout
          </Link>
          . Further research suggested over 50% of physicians are experiencing
          burnout and one of the major causes is extra administrative work they
          do apart from their direct care to patients. It was time something
          changed. Vijay is now on a mission not just to help patients, but also
          the caregivers that will lead to better patient care.
        </p>
      </section>

      <section className='my-10 lg:my-20'>
        <h2 className='text-xl mb-3 text-[#9CC2A0]'>Team</h2>
        <div>
          <div className='w-fit'>
            <Image
              src='/gator_logo.png'
              alt='Gator Logo'
              width={50}
              height={50}
              draggable={false}
              className='mx-auto mb-3'
            />
            <p className='text-xs text-muted-foreground'>Founder</p>
            <p>Vijay Stroup</p>
          </div>
        </div>
      </section>
    </main>
  )
}
