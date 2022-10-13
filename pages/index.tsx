import type { NextPage } from 'next'
import type { FC } from 'react'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  PencilSquareIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/solid'

const Home: NextPage = () => {
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
    <>
      <Head>
        <title>Gator</title>
        <meta name='description' content='Software company' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header onMouseLeave={() => closeMenu()}>
        <div className='flex items-center justify-between px-4 py-2 text-black'>
          <Link href='/'>
            <a className='flex items-center'>
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

          <nav className='space-x-10'>
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

          <Link href='/contact'>
            <a className='px-2 text-lg font-bold text-green-400 rounded-full bg-green-200/40 hover:bg-green-200/50 hover:text-green-500'>
              Contact
            </a>
          </Link>
        </div>

        {menu && (
          <div className='flex justify-center mt-8 mb-4 border-t-2 backdrop-blur-xl'>
            {menu}
          </div>
        )}
      </header>

      <main className='pt-40 text-center h-[83.7%] bg-green-500/25'>
        <div>
          <Image
            alt='Gator Logo'
            src='/gatorlogo.png'
            width={300}
            height={300}
          />
        </div>
        <h1 className='mt-8 ml-2 font-bold text-transparent text-7xl font-WildLife bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400'>
          Power the Digital Swamp
        </h1>
      </main>

      <footer className='flex px-2 pt-8 pb-4 space-x-12 bg-green-500/50'>
        <div className='flex items-center'>
          <Image alt='Gator Logo' src='/gatorlogo.png' width={30} height={30} />
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
                  <h2>Privacy & Legal</h2>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
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

export default Home
