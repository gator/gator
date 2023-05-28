import { type FC } from 'react'
import Footer from './footer'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
