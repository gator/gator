import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import DashboardLayout from '../../components/dashboardLayout'
import SEO from '../../components/seo'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Dashboard: NextPageWithLayout = () => {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  // In case the user signs out while on the page.
  if (!isLoaded) {
    return null
  }

  // redirect to login if not logged in
  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <>
      <SEO title='Dashboard - Gator' />

      <main>
        <h1 className='text-5xl'>Hi, {user.firstName}.</h1>
        <h2 className='mt-10 mb-20 text-xl'>
          Select the application you would like to go to.
        </h2>

        <div className='flex justify-center gap-5'>
          <Link href='/dashboard/scribe' className=''>
            <div className='bg-white/5 border-[1px] border-white/50 rounded-lg p-20 w-fit hover:-translate-y-1 duration-100 text-center'>
              <p className='mb-1 text-sm'>Gator</p>
              <h1 className='text-3xl font-bold'>Scribe</h1>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Dashboard
