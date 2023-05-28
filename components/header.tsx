import { type FC, useState } from 'react'
import Link from 'next/link'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const boldLinkPaths = ['/', '/privacy-policy', '/terms-of-use', '/login']

  return (
    <header className='fixed top-0 z-10 flex items-center justify-between w-full px-4 py-2 bg-black'>
      <nav onClick={() => console.log('click')}>
        <Link href='/'>
          <Image src='/Alligator2.png' height={30} width={30} alt='logo' />
        </Link>
      </nav>

      <nav className='group'>
        <ul className='flex'>
          <li
            className={`duration-[150ms] group-hover:opacity-50 group-hover:font-normal hover:!opacity-100 hover:!font-bold 
              ${
                boldLinkPaths.includes(router.pathname)
                  ? 'font-bold opacity-100'
                  : null
              }
              ${router.pathname === '/mission' ? 'font-bold' : 'opacity-50'}
              `}
          >
            <Link href='/mission' className='px-6 py-4'>
              Mission
            </Link>
          </li>
          <li
            className={`duration-[150ms] group-hover:opacity-50 group-hover:font-normal hover:!opacity-100 hover:!font-bold 
              ${
                boldLinkPaths.includes(router.pathname)
                  ? 'font-bold opacity-100'
                  : null
              }
              ${router.pathname === '/story' ? 'font-bold' : 'opacity-50'}
            `}
          >
            <Link href='/story' className='px-6 py-4'>
              Story
            </Link>
          </li>
          <li
            className={`duration-[150ms] group-hover:opacity-50 group-hover:font-normal hover:!opacity-100 hover:!font-bold 
              ${
                boldLinkPaths.includes(router.pathname)
                  ? 'font-bold opacity-100'
                  : null
              }
              ${router.pathname === '/join' ? 'font-bold' : 'opacity-50'}
              `}
          >
            <Link href='/join' className='px-6 py-4'>
              Join
            </Link>
          </li>
        </ul>
      </nav>

      <nav className='flex items-center group'>
        <Link
          href='/login'
          className='p-1 duration-[150ms] group-hover:opacity-50 hover:!opacity-100'
        >
          <UserIcon className='stroke-2 w-7 h-7' />
        </Link>
        <div
          className='p-1 cursor-pointer duration-[150ms] group-hover:opacity-50 hover:!opacity-100'
          onClick={() => console.log('clicked')}
        >
          <EllipsisVerticalIcon className='w-7 h-7' />
        </div>
      </nav>
    </header>
  )
}

export default Header
