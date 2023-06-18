import { type FC } from 'react'
import Footer from './footer'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <motion.div
      key={router.route}
      className='flex flex-col h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className='fixed top-0 z-30 hidden w-full px-4 py-1 text-white bg-black sm:block'>
        <div className='relative z-30 flex items-center justify-between'>
          <nav className='flex'>
            <Link href='/dashboard' className='p-2'>
              <Image src='/gator_logo.png' height={30} width={30} alt='logo' />
            </Link>
          </nav>

          <nav className='flex items-center justify-end float-right group'>
            <Link
              href='/logout'
              className='p-1 duration-[150ms] group-hover:opacity-50 hover:!opacity-100 hover:translate-x-1'
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className='stroke-2 w-7 h-7'
              />
            </Link>
          </nav>
        </div>
      </header>

      {children}
    </motion.div>
  )
}

export default DashboardLayout
