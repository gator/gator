import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

interface ExtraMenuProps {
  showExtraMenu: boolean
}

const ExtraMenu: FC<ExtraMenuProps> = ({ showExtraMenu }) => {
  return (
    <div
      className={`fixed flex bg-black border-[1px] mx-8 rounded-full px-4 py-2 items-center duration-200 -top-2 right-0 z-20
      ${showExtraMenu && 'translate-y-16'}
    `}
    >
      <div>
        <p className='mr-24 text-xs'>&copy; Gator, LLC All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <Link
                href='/careers'
                className='text-xs duration-100 opacity-50 hover:opacity-100'
              >
                Careers
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link
              href='https://www.linkedin.com/company/gator'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faLinkedin} size='sm' color='white' />
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/gator'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithub} size='sm' color='white' />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ExtraMenu
