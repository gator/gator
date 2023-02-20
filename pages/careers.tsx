import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Careers: NextPageWithLayout = () => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const { first_name, last_name, phone, email, interest, portfolio } =
      Object.fromEntries(formData)
    console.log(first_name, last_name, phone, email, interest, portfolio)
  }

  return (
    <>
      <SEO title='Careers - Gator' />

      <main className='flex flex-col'>
        <h1 className='text-2xl font-bold text-center'>Careers</h1>
        <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10' />

        <p className='italic text-center'>No current openings</p>

        <div className='mt-28'>
          <h2 className='font-bold text-center'>Form of interest</h2>
          <form className='mt-10 text-black' onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  name='first_name'
                  id='first_name'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='first_name'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  First name
                </label>
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  name='last_name'
                  id='last_name'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='last_name'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Last name
                </label>
              </div>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  name='phone'
                  id='phone'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='phone'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='email'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Email address
                </label>
              </div>
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='text'
                name='interest'
                id='interest'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='interest'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Area of interest
              </label>
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='text'
                name='portfolio'
                id='portfolio'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='portfolio'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Portfolio (e.g. personal website, GitHub, etc.)
              </label>
            </div>

            <button
              type='submit'
              className='text-white float-right bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

Careers.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Careers
