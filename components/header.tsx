import { type FC, useState } from 'react'
import Link from 'next/link'
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ExtraMenu from './extraMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const DesktopHeader: FC = () => {
  const boldLinkPaths = ['/', '/privacy-policy', '/terms-of-use', '/login']
  const [showExtraMenu, setShowExtraMenu] = useState(false)
  const router = useRouter()

  return (
    <>
      <header className='fixed top-0 z-30 hidden w-full px-4 py-1 text-white bg-black sm:block'>
        <div className='relative z-30 flex items-center justify-between'>
          <nav className='flex w-1/3'>
            <Link href='/' className='p-2'>
              <Image src='/gator_logo.png' height={30} width={30} alt='logo' />
            </Link>
          </nav>

          <nav className='w-1/3 group'>
            <ul className='flex justify-center'>
              <li
                className={`duration-[150ms] font-bold group-hover:opacity-50 hover:!opacity-100
              ${
                router.pathname !== '/mission' &&
                !boldLinkPaths.includes(router.pathname) &&
                'opacity-50'
              }
            `}
              >
                <Link href='/mission' className='px-6 py-4'>
                  Mission
                </Link>
              </li>
              <li
                className={`duration-[150ms] font-bold group-hover:opacity-50 hover:!opacity-100
              ${
                router.pathname !== '/story' &&
                !boldLinkPaths.includes(router.pathname) &&
                'opacity-50'
              }
            `}
              >
                <Link href='/story' className='px-6 py-4'>
                  Story
                </Link>
              </li>
              <li
                className={`duration-[150ms] font-bold group-hover:opacity-50 hover:!opacity-100
              ${
                router.pathname !== '/join' &&
                !boldLinkPaths.includes(router.pathname) &&
                'opacity-50'
              }
            `}
              >
                <Link href='/join' className='px-6 py-4'>
                  Join
                </Link>
              </li>
            </ul>
          </nav>

          <nav className='flex items-center justify-end float-right w-1/3 group'>
            <Link
              href='/login'
              className='p-1 duration-[150ms] group-hover:opacity-50 hover:!opacity-100'
            >
              <UserIcon className='stroke-2 w-7 h-7' />
            </Link>
            <div
              className='p-1 cursor-pointer duration-[150ms] group-hover:opacity-50 hover:!opacity-100'
              onClick={() => setShowExtraMenu(!showExtraMenu)}
            >
              <EllipsisVerticalIcon className='w-7 h-7' />
            </div>
          </nav>
        </div>
      </header>

      <ExtraMenu showExtraMenu={showExtraMenu} />
    </>
  )
}

const MobileHeader: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className='z-30 block px-2 text-white bg-black sm:hidden'>
        <div className='relative z-30 flex items-center justify-between'>
          <nav className='flex'>
            <Link href='/' className='p-2'>
              <Image src='/gator_logo.png' height={30} width={30} alt='logo' />
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
          className={`fixed bg-black left-0 right-0 top-0 pt-[2.9rem] bottom-0 z-20 justify-end text-right ${
            mobileMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className='flex flex-col h-full mt-10 mr-10 space-y-4'>
            <li className='text-4xl font-bold'>
              <Link
                href='/mission'
                className='p-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </Link>
            </li>
            <li className='text-4xl font-bold'>
              <Link
                href='/story'
                className='p-2'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Story
              </Link>
            </li>
            <li className='text-4xl font-bold'>
              <Link
                href='/join'
                className='p-2'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Join
              </Link>
            </li>

            <li className='mt-20 space-x-2 text-white'></li>
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
              <FontAwesomeIcon icon={faLinkedin} size='lg' color='white' />
            </Link>
            <Link
              href='https://github.com/gator'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithub} size='lg' color='white' />
            </Link>
          </div>
          <div>
            <ul className='flex justify-end space-x-4 text-sm'>
              <li>
                <Link
                  href='/careers'
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  Careers
                </Link>
              </li>
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
