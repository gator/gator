import { useState, type ReactElement } from 'react'
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
import { useAuth } from '@clerk/nextjs'

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
      return { props: { initCases: [] } }
    }

    const data = await response.json()

    return { props: { initCases: data.data } }
  },
  { loadUser: true }
)

const Scribe: NextPageWithLayout<{ initCases: CaseT[] }> = ({ initCases }) => {
  const { sessionId, getToken } = useAuth()
  const [cases, setCases] = useState<CaseT[]>(initCases)
  const [refreshing, setRefreshing] = useState(false)
  const [offset, setOffset] = useState('day')
  const [search, setSearch] = useState('')

  async function refresh(offset: string) {
    setOffset(offset)
    setRefreshing(true)
    const response = await fetch(`/api/get-cases?offset=${offset}`, {
      // @ts-ignore
      headers: {
        'Content-Type': 'application/json',
        'X-Token': await getToken(),
        'X-Session-Id': sessionId
      }
    })
    setRefreshing(false)

    if (!response.ok) {
      return
    }

    const data = await response.json()

    setCases(data.data)
  }

  return (
    <>
      <SEO title='Scribe - Gator' />

      <main>
        <div className='flex items-center justify-between mx-10'>
          <div>
            <input
              className='p-2 mr-5 rounded-lg bg-black/5'
              placeholder='search...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className='p-2 rounded-lg cursor-pointer bg-black/5'
              defaultValue={offset}
              onChange={(e) => refresh(e.target.value)}
            >
              <option value='day'>Today</option>
              <option value='3day'>Last 3 Days</option>
              <option value='week'>Last Week</option>
              <option value='month'>Last Month</option>
            </select>
          </div>
          <div
            className='flex items-center justify-center p-2 rounded-lg cursor-pointer bg-black/5'
            onClick={() => !refreshing && refresh(offset)}
          >
            <FontAwesomeIcon
              icon={refreshing ? faRefresh : faRefresh}
              className={`w-6 h-6 ${refreshing ? 'animate-spin' : ''}`}
            />
          </div>
        </div>

        <div className='mx-10 mt-10'>
          {refreshing && (
            <div className='flex items-center justify-center mb-10'>
              <div className='w-6 h-6 border-2 border-t-2 border-black rounded-full animate-spin'></div>
            </div>
          )}
          {cases?.length === 0 && (
            <div className='flex items-center justify-center mb-10'>
              <p className='text-2xl'>No cases found</p>
            </div>
          )}
          {cases
            ?.filter(
              (c) =>
                c.keywords?.find((k: string) =>
                  k.toLowerCase().includes(search.toLowerCase())
                ) ||
                c.note?.toLowerCase().includes(search.toLowerCase()) ||
                c.rx?.find((r: string) =>
                  r.toLowerCase().includes(search.toLowerCase())
                ) ||
                c.summary?.toLowerCase().includes(search.toLowerCase()) ||
                c.transcript
                  .join(' ')
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .map((c: any, index: number) => (
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
                  <div className='ml-10'>
                    <ChevronRightIcon className='w-5 h-5 ' rotate={100} />
                  </div>
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
