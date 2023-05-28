import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <AnimatePresence mode='wait'>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
