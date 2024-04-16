import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      {/* announcement */}
      <Link
        href='https://scribe.gator.sh'
        className='group flex justify-center items-center mb-20'
      >
        <Badge
          variant='outline'
          className='bg-[#005A00]/10 group text-[#48D256]'
        >
          <Badge
            variant='default'
            className='bg-green-500 text-white font-bold -translate-x-2 hover:bg-green-600'
          >
            Try Gator Scribe
          </Badge>
          Check out the Dashboard Demo
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='ml-2 group-hover:translate-x-1 transition-transform duration-200'
          >
            <path
              d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
              fill='currentColor'
              fill-rule='evenodd'
              clip-rule='evenodd'
            ></path>
          </svg>
        </Badge>
      </Link>

      {/* landing title */}
      <div className='mx-60 text-center'>
        <h1 className='text-7xl text-center leading-tight'>
          <span
            style={{
              background: 'linear-gradient(180deg, #48D256 0%, #286B2F 50%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Caring
          </span>{' '}
          for those who Care for{' '}
          <span
            style={{
              background: 'linear-gradient(180deg, #48D256 0%, #286B2F 50%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Us
          </span>
        </h1>
        <h2 className='text-[#9CC2A0] mt-10'>
          Powerful solutions that help your team speed up. Take your Healthcare
          to the next level by improving patient outcomes and reducing provider
          stress.
        </h2>
        <div className='mt-10 space-x-5'>
          <Button
            asChild
            variant='outline'
            className='bg-[#005A00]/10 hover:bg-[#005A00]/20'
          >
            <Link href='/login'>Swim through the swamp</Link>
          </Button>

          <Button
            asChild
            variant='outline'
            className='bg-green-500 hover:bg-green-600'
          >
            <Link href='/login'>Get in touch</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
