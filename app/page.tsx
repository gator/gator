import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <Image
        src='/tile_bg.svg'
        alt='tile background'
        width={1200}
        height={800}
        className='-z-10 absolute top-0 left-0 w-full'
        draggable={false}
        priority
      />

      {/* announcement */}
      <div className='flex justify-center items-center mb-20'>
        <Link
          href='/login?redirect_url=https%3A%2F%2Fscribe.gator.sh&demo=true'
          className='group'
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
                fillRule='evenodd'
                clipRule='evenodd'
              ></path>
            </svg>
          </Badge>
        </Link>
      </div>

      {/* landing title */}
      <div className='mx-5 lg:mx-60 flex flex-col items-center px-10'>
        <h1 className='text-5xl lg:text-7xl text-center leading-tight max-w-xl'>
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
        <h2 className='text-[#9CC2A0] mt-10 text-center max-w-xl text-sm lg:text-base'>
          Powerful solutions that help your team speed up. Take your Healthcare
          to the next level by improving patient outcomes and reducing provider
          stress.
        </h2>
        <div className='mt-10 space-x-5 flex'>
          <Button
            asChild
            variant='outline'
            className='bg-[#005A00]/10 hover:bg-[#005A00]/20'
          >
            <Link href='/#integrate'>Swim through the swamp</Link>
          </Button>

          <Button
            asChild
            variant='outline'
            className='bg-green-500 hover:bg-green-600'
          >
            <Link
              href='https://talented-advantage-3c8.notion.site/17ebdd4e046b818eb9f9ca1b52331a72'
              target='_blank'
            >
              Get in touch
            </Link>
          </Button>
        </div>
      </div>

      {/* bento grid overview */}
      <section className='relative mt-20 lg:mt-40 flex justify-center mb-40 px-10'>
        <div
          style={{
            position: 'absolute',
            width: '90vw',
            height: '1451px',
            top: '-40%',
            left: '-10%',
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(112, 224, 0, 0.05) 0%, rgba(112, 224, 0, 0) 100%)',
            zIndex: '-10'
          }}
        />
        <Image
          src='/overview.png'
          alt='Overview'
          width={1200}
          height={800}
          priority
          draggable={false}
          className='hidden lg:block'
        />
        <Image
          src='/overview_mobile.png'
          alt='Overview'
          width={500}
          height={800}
          priority
          draggable={false}
          className='block lg:hidden'
        />
      </section>

      {/* integrate */}
      <section
        className='bg-slate-100 min-h-screen pt-20 flex flex-col items-center text-black px-5 pb-10'
        id='integrate'
      >
        <Badge className='bg-green-500 text-white font-normal text-base hover:bg-green-500'>
          <span className='mr-2'>
            <svg
              width='21'
              height='10'
              viewBox='0 0 21 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.841 4.72943C13.841 6.61157 12.3152 8.13734 10.4331 8.13734C8.55094 8.13734 7.02517 6.61157 7.02517 4.72943C7.02517 2.84731 8.55094 1.32154 10.4331 1.32154C12.3152 1.32154 13.841 2.84731 13.841 4.72943ZM15.1118 5.42514C14.7752 7.7073 12.8087 9.4589 10.4331 9.4589C8.05742 9.4589 6.09087 7.7073 5.75444 5.42514H0.695548C0.311408 5.42514 0 5.11372 0 4.72959C0 4.34545 0.311408 4.03404 0.695548 4.03404H5.75439C6.09071 1.75174 8.05731 0 10.4331 0C12.8088 0 14.7754 1.75174 15.1118 4.03404H20.1709C20.555 4.03404 20.8664 4.34545 20.8664 4.72959C20.8664 5.11372 20.555 5.42514 20.1709 5.42514H15.1118Z'
                fill='white'
              />
            </svg>
          </span>
          Integrate
        </Badge>

        <h1 className='text-2xl lg:text-5xl font-bold mt-20 mb-10 text-center'>
          Streamline your established routine
        </h1>
        <p className='text-sm lg:text-base text-muted-foreground text-center'>
          Gator can integrate with your existing practices. Extend the
          possibilities of your infrastructure.
        </p>

        <Image
          src='/integrate.png'
          alt='Overview'
          width={1100}
          height={800}
          className='mt-20 hidden lg:block'
          draggable={false}
        />
        <Image
          src='/integrate_mobile.png'
          alt='Overview'
          width={200}
          height={300}
          className='mt-5 block lg:hidden'
          draggable={false}
        />
      </section>

      <section className='relative pt-20 flex flex-col items-center px-5'>
        <Image
          src='/tile_security.svg'
          alt='security background'
          width={1200}
          height={800}
          className='-z-10 absolute top-0 left-0 w-full'
          draggable={false}
        />

        <svg
          width='1440'
          height='1232'
          viewBox='0 0 1440 1232'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-0 left-0 -z-10 w-full'
        >
          <ellipse
            cx='704.191'
            cy='616.167'
            rx='207.5'
            ry='1007.67'
            transform='rotate(-54 704.191 616.167)'
            fill='url(#paint0_radial_225_51)'
          />
          <defs>
            <radialGradient
              id='paint0_radial_225_51'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(704.191 616.167) rotate(90) scale(1007.67 207.5)'
            >
              <stop stopColor='#70E000' stopOpacity='0.05' />
              <stop offset='1' stopColor='#70E000' stopOpacity='0' />
            </radialGradient>
          </defs>
        </svg>

        <Badge className='bg-[#005A00]/10 text-white font-normal text-base hover:bg-[#005A00]/20'>
          <span className='mr-2'>
            <svg
              width='12'
              height='15'
              viewBox='0 0 12 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='-z-10'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.27273 3.99023C3.27273 3.03492 3.53693 2.32047 3.97443 1.84938C4.40655 1.38409 5.06817 1.09091 6.00153 1.09091C6.9354 1.09091 7.59607 1.38351 8.02716 1.84776C8.46369 2.31784 8.72727 3.03139 8.72727 3.98722V5.4782H3.27273V3.99023ZM2.18182 5.4782V3.99023C2.18182 2.83983 2.50188 1.8319 3.17508 1.10702C3.85366 0.37635 4.82918 0 6.00153 0C7.17363 0 8.14857 0.375303 8.82655 1.10544C9.4992 1.82975 9.81818 2.83708 9.81818 3.98722V5.4782H10.9091C11.5116 5.4782 12 5.96663 12 6.56911V13.1146C12 13.7171 11.5116 14.2055 10.9091 14.2055H1.09091C0.488422 14.2055 0 13.7171 0 13.1146V6.56911C0 5.96663 0.488422 5.4782 1.09091 5.4782H2.18182ZM1.09091 6.56911H10.9091V13.1146H1.09091V6.56911Z'
                fill='white'
              />
            </svg>
          </span>
          Security
        </Badge>

        <h1 className='text-2xl lg:text-5xl font-bold mt-20 mb-10 text-center'>
          Peace of mind
        </h1>
        <p className='text-[#9CC2A0] text-sm lg:text-base text-center'>
          Gator is built with security first principles. Our solutions are
          created to protect PHI.
        </p>

        <Image
          src='/security.png'
          alt='Security'
          width={1100}
          height={800}
          className='mt-20 hidden lg:block'
          draggable={false}
        />
        <Image
          src='/security_mobile.png'
          alt='Security'
          width={400}
          height={800}
          className='mt-20 block lg:hidden'
          draggable={false}
        />
      </section>

      <section className='flex flex-col items-center mt-40'>
        <h1 className='text-xl lg:text-5xl text-[#9CC2A0] text-center'>
          Transform your practice today
        </h1>
        <Button
          asChild
          className='mt-20 text-3xl py-6 bg-green-500 text-white font-bold hover:bg-green-600'
          variant='outline'
        >
          <Link href='https://forms.office.com/r/Xcg7i91ibx' target='_blank'>
            Contact
          </Link>
        </Button>
      </section>
    </main>
  )
}
