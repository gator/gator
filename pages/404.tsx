import { useEffect } from 'react'

export default function Custom404() {
  useEffect(() => {
    // redirect to home page after 5 seconds
    setTimeout(() => {
      window.location.href = '/'
    }, 5000)
  }, [])

  return (
    <>
      <video
        src='/dog_lost.mp4'
        muted
        autoPlay
        loop
        className='absolute top-0 object-cover h-full -z-10'
      />
      <main className=''>
        <h1 className='mt-40 text-6xl font-bold'>Are you lost?</h1>
        <p className='mt-10 text-2xl'>Here, let me help you.</p>
      </main>
    </>
  )
}
