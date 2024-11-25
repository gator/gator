import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

export async function LoginButton() {
  const { userId } = await auth()

  return (
    <Link
      href='/login'
      className='bg-green-500 text-white font-bold hover:bg-green-600 px-4 py-2 rounded-lg'
    >
      {userId ? 'Dashboard' : 'Login'}
    </Link>
  )
}
