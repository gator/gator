import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../../_app'
import DashboardLayout from '../../../components/dashboardLayout'
import SEO from '../../../components/seo'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { withServerSideAuth } from '@clerk/nextjs/ssr'
import { type GetServerSideProps } from 'next'
import { type CaseT } from '../../../types/case'

export const getServerSideProps: GetServerSideProps = withServerSideAuth(
  async ({ req }) => {
    const { sessionId, getToken } = req.auth

    if (!sessionId) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    // fetch data
    const response = await fetch(
      'https://us-east1-animated-bonsai-387322.cloudfunctions.net/get_cases',
      {
        // @ts-ignore
        headers: {
          'Content-Type': 'application/json',
          'X-Token': await getToken(),
          'X-Session-Id': sessionId
        }
      }
    )

    if (!response.ok) {
      return { props: { cases: [] } }
    }

    const data = await response.json()

    return { props: { cases: data.data } }
  },
  { loadUser: true }
)

const Scribe: NextPageWithLayout<{ cases: CaseT[] }> = ({ cases }) => {
  return (
    <>
      <SEO title='Scribe - Gator' />

      <main>
        <div className='flex items-center justify-between mx-40'>
          <div>
            <input
              className='p-2 mr-5 rounded-lg bg-black/5'
              placeholder='search...'
            />
            <select
              className='p-2 rounded-lg cursor-pointer bg-black/5'
              defaultValue='today'
            >
              <option value='today'>Today</option>
              <option value='3days'>Last 3 Days</option>
              <option value='week'>Last Week</option>
              <option value='month'>Last Month</option>
            </select>
          </div>
          <FontAwesomeIcon
            icon={faRefresh}
            className='w-6 h-6 p-2 rounded-lg cursor-pointer bg-black/5'
          />
        </div>

        <div className='mx-40 mt-10'>
          {cases.map((c: any, index: number) => (
            <Link key={c.id} href={`/dashboard/scribe/${c.id}`}>
              <div
                className={`${
                  !(index % 2) && 'bg-black/5'
                } flex justify-between items-center p-2 hover:scale-105 duration-100`}
              >
                <div>
                  <p className='text-xs'>{c.id}</p>
                  <p className='text-md'>
                    {new Date(c.datetime).toLocaleString()}
                  </p>
                  <p className='mt-2 text-lg line-clamp-2'>{c.summary}</p>
                </div>
                <ChevronRightIcon className='w-5 h-5' rotate={100} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

Scribe.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Scribe
