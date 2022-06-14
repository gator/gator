import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gator</title>
        <meta name='description' content='Software company' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Image
        src={'https://c.tenor.com/EzGd6XFZgZ4AAAAC/funny-alligator.gif'}
        alt='landing'
        layout='fill'
        draggable={false}
      />

      <p style={{ color: 'white', position: 'absolute', bottom: 0, right: 0 }}>
        yes, it&apos;s a croc. still funny tho.
      </p>
    </div>
  )
}

export default Home
