import { type FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer: FC = () => {
  const router = useRouter()

  return (
    <footer className='fixed bottom-0 right-0 z-10 mb-5 mr-5 text-sm group'>
      <Link
        href='/privacy-policy'
        className={`p-2 duration-[150ms] group-hover:opacity-50 hover:!opacity-100 
          ${
            router.pathname === '/privacy-policy' ? 'opacity-100' : 'opacity-50'
          }`}
      >
        Privacy
      </Link>
      <Link
        href='/terms-of-use'
        className={`p-2 duration-[150ms] group-hover:opacity-50 hover:!opacity-100 
          ${
            router.pathname === '/terms-of-use' ? 'opacity-100' : 'opacity-50'
          }`}
      >
        Terms
      </Link>
    </footer>
  )
}

export default Footer
