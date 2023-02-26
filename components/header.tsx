import { type FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className='pb-4 m-2 border-b-[1px] border-black/5 flex flex-col'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <Link href='/'>
            <Image
              src='/Alligator2.png'
              height={25}
              width={25}
              onClick={() => setMobileMenuOpen(false)}
              className='cursor-pointer'
            />
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
          <button className='hidden sm:block px-2 text-white rounded-md bg-gradient-to-br from-[#97E368] to-[#73BC47] w-fit font-bold'>
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
            <Link href='/solutions'>
              <a onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            </Link>
          </li>
          <li>
            <Link href='/mission'>
              <a onClick={() => setMobileMenuOpen(false)}>Mission</a>
            </Link>
          </li>
          <li>
            <Link href='/team'>
              <a onClick={() => setMobileMenuOpen(false)}>Team</a>
            </Link>
          </li>
          <li>
            <Link href='/careers'>
              <a onClick={() => setMobileMenuOpen(false)}>Careers</a>
            </Link>
          </li>
          <li className='px-2 text-white rounded-md bg-gradient-to-br from-[#97E368] to-[#73BC47] w-fit font-bold'>
            <Link href='/contact'>
              <a onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
