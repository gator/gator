import type { Metadata } from 'next'
import { SignedIn, SignedOut, SignOutButton, UserButton } from '@clerk/nextjs'
import LoginForm from './LoginForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login - Gator'
}

export default function Page() {
  return (
    <main className='px-5 lg:px-60 min-h-[50vh]'>
      <SignedOut>
        <div className='flex justify-center'>
          <LoginForm />
        </div>
      </SignedOut>
      <SignedIn>
        <div className='flex justify-between items-center mb-10'>
          <h1 className='text-xl lg:text-3xl'>Apps</h1>
          <div className='bg-primary-foreground w-fit py-1 px-2 rounded-md'>
            <SignOutButton />
          </div>
        </div>
        <div className='space-x-4'>
          <Link
            href='https://scribe.gator.sh'
            className='bg-green-500 text-white font-bold hover:bg-green-600 text-lg py-2 px-3 rounded-md'
          >
            Scribe
          </Link>
          <Link
            href='https://scribe-encounter.gator.sh'
            className='bg-green-500 text-white font-bold hover:bg-green-600 text-lg py-2 px-3 rounded-md'
          >
            Scribe Encounter
          </Link>
        </div>
      </SignedIn>
    </main>
  )
}
