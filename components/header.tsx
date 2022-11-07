import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  PencilSquareIcon,
  CubeTransparentIcon,
  ArrowTopRightOnSquareIcon,
  HomeIcon
} from '@heroicons/react/24/solid'

const Header: FC = () => {
  const [menu, setMenu] = useState<any>(false)
  const [timeoutActive, setTimeoutActive] = useState(false)

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const closeMenu = async () => {
    // if (timeoutActive) return
    // setTimeoutActive(true)
    // await delay(250)
    // setTimeoutActive(false)
    setMenu(false)
  }

  return (
    <header onMouseLeave={() => closeMenu()}>
      <div className='flex items-center justify-between px-4 py-2 text-black'>
        <div className='w-full'>
          <Link href='/'>
            <a className='flex items-end w-fit'>
              <Image
                alt='Gator Logo'
                src='/Alligator2.png'
                width={50}
                height={50}
              />
            </a>
          </Link>
        </div>

        <nav className='w-full space-x-10 text-center'>
          <ul className='flex justify-center'>
            <li
              className='font-bold text-green-500 cursor-default'
              onMouseOver={() => setMenu(<Products />)}
            >
              Products
            </li>
          </ul>
          {/* <ul>
              <li
                className='font-bold text-green-500 cursor-default'
                onMouseOver={() => setMenu(<Solutions />)}
              >
                Solutions
              </li>
            </ul> */}
        </nav>

        <div className='w-full text-right'>
          <Link href='/contact'>
            <a className='px-2 text-lg font-bold text-green-400 rounded-full bg-green-200/40 hover:bg-green-200/50 hover:text-green-500'>
              Contact
            </a>
          </Link>
        </div>
      </div>

      {menu && (
        <div className='flex justify-center my-8 border-t-2'>
          {menu}
        </div>
      )}
    </header>
  )
}

const Products: FC = () => {
  return (
    <ul className='flex flex-wrap justify-center gap-4 px-4 pt-10'>
      <li className='p-2 bg-green-100 rounded-lg cursor-pointer h-28 w-60 hover:bg-green-200'>
        <Link href='#'>
          <a>
            <div className='flex items-center'>
              <CubeTransparentIcon className='w-5 h-5 mr-1' />
              <h2 className='font-bold'>Anatomy</h2>
            </div>
            <p>Coming soon...</p>
            {/* <p>Learn human anatomy through interactive 3D models.</p> */}
          </a>
        </Link>
      </li>

      <li className='p-2 bg-green-100 rounded-lg cursor-pointer h-28 w-60 hover:bg-green-200'>
        <Link href='https://bednotes.gator.sh'>
          <a>
            <div className='flex items-center'>
              <PencilSquareIcon className='w-5 h-5 mr-1' />
              <h2 className='font-bold'>Bed Notes</h2>
            </div>
            <p>Patient overview system to increase productivity.</p>
          </a>
        </Link>
      </li>

      <li className='p-2 bg-green-100 rounded-lg cursor-pointer h-28 w-60 hover:bg-green-200'>
        <Link href='#'>
          <a>
            <div className='flex items-center'>
              <ArrowTopRightOnSquareIcon className='w-5 h-5 mr-1' />
              <h2 className='font-bold'>To</h2>
            </div>
            <p>Coming soon...</p>
            {/* <p>URL shortener.</p> */}
          </a>
        </Link>
      </li>

      <li className='p-2 bg-green-100 rounded-lg cursor-pointer h-28 w-60 hover:bg-green-200'>
        <Link href='#'>
          <a>
            <div className='flex items-center'>
              <HomeIcon className='w-5 h-5 mr-1' />
              <h2 className='font-bold'>Uncle George</h2>
            </div>
            <p>Coming soon...</p>
            {/* <p>Community home services.</p> */}
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default Header
