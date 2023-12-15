import { type FC, useState } from 'react'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const DesktopHeader: FC = () => {
  return (
    <header className='bg-[url(/images/heroes/wiggle.svg)] items-center pb-10 justify-between hidden px-10 pt-8 sm:flex bg-[#E5FFEA]'>
      <div className='w-full'>
        <Link href='/' className='flex w-fit'>
          <Image
            src='/images/logo_banner.svg'
            width={150}
            height={150}
            alt='logo_banner'
          />
        </Link>
      </div>
      <nav className='flex justify-center w-full'>
        <ul className='flex gap-6 text-sm'>
          <li>
            <Link href='/#how-it-works'>How It Works</Link>
          </li>
          <li>
            <Link href='/#features'>Features</Link>
          </li>
          <li>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='flex justify-end w-full'>
        <Link href='/login'>
          <button className='px-2 py-1 text-white bg-blue-500 rounded'>
            Login
          </button>
        </Link>
      </div>
    </header>
  )
}

const MobileHeader: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className='z-30 block px-2 sm:hidden bg-[#E5FFEA]'>
        <div className='relative z-30 flex items-center justify-between'>
          <nav className='flex'>
            <Link href='/' className='p-2'>
              <Image
                src='/images/logo_banner.svg'
                height={100}
                width={100}
                alt='logo'
              />
            </Link>
          </nav>

          <div className='flex items-center space-x-2'>
            <Link
              href='/login'
              className='p-1 duration-[150ms] group-hover:opacity-50 hover:!opacity-100'
            >
              <UserIcon className='stroke-2 w-7 h-7' />
            </Link>
            <PlusIcon
              className={`w-7 h-7 cursor-pointer duration-200 ${
                mobileMenuOpen && 'rotate-45'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>

        <nav
          className={`fixed bg-[#e5ffea] left-0 right-0 top-0 pt-[2.9rem] bottom-0 z-20 justify-end text-right ${
            mobileMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className='flex flex-col h-full mt-10 mr-10 space-y-4'>
            <li className='text-4xl font-bold'>
              <Link
                href='/#how-it-works'
                className='p-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
            </li>
            <li className='text-4xl font-bold'>
              <Link
                href='/#features'
                className='p-2'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Features
              </Link>
            </li>
            <li className='text-4xl font-bold'>
              <Link
                href='/#contact'
                className='p-2'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav
          className={`fixed z-30 bottom-0 right-0 text-right p-2 space-y-2 ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className='space-x-4'>
            <Link
              href='https://www.linkedin.com/company/gator'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faLinkedin} size='lg' color='black' />
            </Link>
            <Link
              href='https://github.com/gator'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithub} size='lg' color='black' />
            </Link>
          </div>
          <div>
            <ul className='flex justify-end space-x-4 text-sm'>
              <li>
                <Link
                  href='/privacy-policy'
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms-of-use'
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className='text-sm'>
            <p>&copy; Gator, LLC All rights reserved.</p>
          </div>
        </nav>
      </header>
    </>
  )
}

const Header: FC = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  )
}

export default Header
