import { type FC } from 'react'
import Link from 'next/link'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

const Footer: FC = () => {
  // get route name
  const router = useRouter()
  const route = router.pathname
  const absoluteStyleRoutes = ['/login', '/logout'].includes(route)

  return (
    <footer
      className={`bg-[#34c759] text-white pt-14 pb-24 ${
        absoluteStyleRoutes && 'sm:absolute sm:bottom-0 w-full'
      }`}
    >
      <div className='sm:flex'>
        <div className='flex items-start mb-10 sm:flex-col sm:mb-0 sm:w-2/6'>
          <img
            src='/images/logo_banner.svg'
            className='w-auto h-10 mb-4 mr-4 sm:h-10 sm:rm-0'
          />
          <div className='space-x-6'>
            <Link
              href='https://www.linkedin.com/company/gator'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size='xl'
                color='white'
                className='translate-y-2'
              />
            </Link>
          </div>
        </div>

        <div className='space-y-10 sm:space-y-0 sm:flex sm:space-x-20'>
          <div>
            <h1 className='mb-4 text-xl font-bold'>Menu</h1>
            <ul className='space-y-2 opacity-80'>
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
          </div>
          <div>
            <h1 className='mb-4 text-xl font-bold'>Help</h1>
            <ul className='space-y-2 opacity-80'>
              <li>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/terms-of-use'>Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-10 sm:ml-20 sm:mt-0'>
          <img
            src='/images/hipaa_compliant.png'
            className='w-auto h-14 sm:h-14 sm:rm-0'
          />
        </div>
      </div>

      <p className='mt-20 text-sm text-center opacity-50'>
        &copy; Gator, All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
