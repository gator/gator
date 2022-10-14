import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  PencilSquareIcon,
  CubeTransparentIcon
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
        <Link href='/'>
          <a className='flex items-center w-full'>
            <Image
              alt='Gator Logo'
              src='/gatorlogo.png'
              width={50}
              height={50}
            />
            <h1 className='ml-2 text-4xl font-bold text-transparent font-WildLife bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400'>
              GATOR
            </h1>
          </a>
        </Link>

        <nav className='w-full space-x-10 text-center'>
          <ul>
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
        <div className='flex justify-center mt-8 mb-4 border-t-2 backdrop-blur-xl'>
          {menu}
        </div>
      )}
    </header>
  )
}

const Products: FC = () => {
  return (
    <ul className='flex px-4 pt-10 space-x-4'>
      <li className='p-2 bg-green-100 rounded-lg cursor-pointer w-60 hover:bg-green-200'>
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
      <li className='p-2 bg-green-100 rounded-lg cursor-pointer w-60 hover:bg-green-200'>
        <Link href='#'>
          <a>
            <div className='flex items-center'>
              <CubeTransparentIcon className='w-5 h-5 mr-1' />
              <h2 className='font-bold'>Anatomy</h2>
            </div>
            <p>Coming soon...</p>
            {/* <p>Learn Human Anatomy Through Interactive 3D Models.</p> */}
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default Header
