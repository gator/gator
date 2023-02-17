import { type FC, useState } from 'react'
import Link from 'next/link'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='p-2 pb-4'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <Link href='/'>
            <Image src='/Alligator2.png' height={25} width={25} />
          </Link>
          <nav className='hidden ml-4 sm:block'>
            <ul className='flex space-x-4'>
              <li>
                <Link href='/solutions'>Solutions</Link>
              </li>
              <li>
                <Link href='/mission'>Mission</Link>
              </li>
              <li>
                <Link href='/team'>Team</Link>
              </li>
              <li>
                <Link href='/careers'>Careers</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Link href='/contact'>
          <button className='hidden sm:block px-2 text-white rounded-md bg-gradient-to-br from-[#97E368]/75 to-[#73BC47] w-fit font-bold'>
            Contact
          </button>
        </Link>

        {/* hamburger menu */}
        <div className='sm:hidden'>
          {!mobileMenuOpen ? (
            <Bars2Icon
              className='w-5 h-5'
              onClick={() => setMobileMenuOpen(true)}
            />
          ) : (
            <XMarkIcon
              className='w-5 h-5'
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </div>
      </div>

      {/* mobile nav */}
      <nav
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } sm:hidden border-t-2 mt-4 pt-2`}
      >
        <ul className='space-y-2'>
          <li>
            <Link href='/solutions'>Solutions</Link>
          </li>
          <li>
            <Link href='/mission'>Mission</Link>
          </li>
          <li>
            <Link href='/team'>Team</Link>
          </li>
          <li>
            <Link href='/careers'>Careers</Link>
          </li>
          <li className='px-2 text-white rounded-md bg-gradient-to-br from-[#97E368]/75 to-[#73BC47] w-fit font-bold'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
