import type { FC } from 'react'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <footer className='flex flex-col items-center p-2 pt-5 mt-auto space-y-4 text-white bg-black'>
      <div>
        <Image alt='Gator Logo' src='/Alligator2.png' width={25} height={25} />
      </div>

      <div className='flex px-2 py-1 space-x-4 bg-white rounded-full w-fit'>
        <a href='https://github.com/gator' target='_blank'>
          <span className='sr-only'>GitHub</span>
          <img src='/github_icon.svg' className='w-5 h-5' />
        </a>
        <a href='https://www.linkedin.com/company/gator' target='_blank'>
          <span className='sr-only'>LinkedIn</span>
          <img src='/linkedin_icon.svg' className='w-5 h-5' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
