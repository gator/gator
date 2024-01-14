import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth, useUser } from '@clerk/nextjs'
import SEO from '../components/seo'

export default function Apps() {
  const router = useRouter()
  const { signOut, isLoaded, isSignedIn } = useAuth()
  const { user } = useUser()

  if (!isLoaded) return null

  if (!isSignedIn) {
    router.push('/login')
    return null
  }

  return (
    <>
      <SEO title='Apps - Gator' />

      <main className='h-screen text-white bg-black'>
        <h1 className='p-10 text-5xl opacity-50 text center'>
          Hi, {user?.firstName}.
        </h1>
        <h2 className='mt-10 mb-20 text-xl text-center'>
          Select the application you would like to go to.
        </h2>

        <div className='flex justify-center gap-5'>
          <Link href='https://scribe.gator.sh'>
            <div className='bg-white/5 border-[1px] border-white/50 rounded-lg p-20 w-fit hover:-translate-y-[.1rem] duration-100 text-center'>
              <p className='mb-1 text-sm'>Gator</p>
              <h1 className='text-3xl font-bold'>Scribe</h1>
            </div>
          </Link>
        </div>

        <div className='absolute bottom-10 right-10'>
          <button
            className='px-5 py-2 text-sm font-bold text-black uppercase bg-white rounded-lg'
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </main>
    </>
  )
}
