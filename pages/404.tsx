import { useEffect, useState } from 'react'

export default function Custom404() {
  const [countDown, setCountDown] = useState(5)

  useEffect(() => {
    // redirect to home page after 5 seconds
    setTimeout(() => {
      window.location.href = '/'
    }, 5000)

    const interval = setInterval(() => {
      setCountDown((prev: number) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
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
      <main className='text-center text-white mt-60'>
        <h1 className='font-bold text-9xl'>Are you lost?</h1>
        <p className='mt-10 text-5xl'>Here, let me help you.</p>
        <p className='mt-10 text-5xl'>Redirecting in {countDown} seconds.</p>
      </main>
    </>
  )
}
