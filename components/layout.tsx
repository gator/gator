import { type FC } from 'react'
import Footer from './footer'
import Header from './header'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <motion.div
      key={router.route}
      className='flex flex-col h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  )
}

export default Layout
