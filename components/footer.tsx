import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <footer className='flex px-2 pt-8 pb-4 space-x-12 bg-green-500/50'>
      <div className='flex items-center'>
        <Image alt='Gator Logo' src='/Alligator2.png' width={30} height={30} />
        <h1 className='ml-2 text-lg'>Gator</h1>
      </div>

      <nav className='flex space-x-8'>
        <ul>
          <h1 className='underline'>Products</h1>
          <li>
            <Link href='https://bednotes.gator.sh'>
              <a>
                <h2>Bed Notes</h2>
              </a>
            </Link>
          </li>
        </ul>

        <ul>
          <h1 className='underline'>Company</h1>
          <li>
            <Link href='#'>
              <a>
                <h2>About</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>
                <h2>Team</h2>
              </a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>
                <h2>Careers</h2>
              </a>
            </Link>
          </li>
        </ul>

        <ul>
          <h1 className='underline'>Resources</h1>
          <li>
            <Link href='#'>
              <a>
                <h2>Legal</h2>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
