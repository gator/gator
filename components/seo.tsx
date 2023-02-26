import * as React from 'react'
import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'
import Head from 'next/head'
import { DefaultSeoProps } from 'next-seo'

export interface Props extends NextSeoProps {
  title?: string
  description?: string
  image?: string
}

const title = 'Gator'
const url = 'https://gator.sh'
const description =
  'Gator provides innovative software solutions that promote the advancement of technology in the healthcare industry. Our tailored, reliable, and scalable products empower healthcare professionals and organizations to streamline operations, enhance patient care, and achieve better outcomes.'
const image = 'https://gator.sh/gator_og.png'

const config: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: 'website',
    url,
    site_name: title,
    images: [{ url: image, width: 1800, height: 1000, alt: title }],
    locale: 'en_US'
  }
}

const SEO: React.FC<Props> = ({ image, ...props }) => {
  const title = props.title ?? config.title
  const description = props.description || config.description

  return (
    <>
      <DefaultSeo {...config} />

      <NextSeo
        {...props}
        {...(image == null
          ? {}
          : {
              openGraph: {
                images: [{ url: image }]
              }
            })}
      />

      <Head>
        <title>{title}</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ffffff' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff'></meta>
      </Head>
    </>
  )
}

export default SEO
