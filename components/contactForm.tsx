import { type FC, useState } from 'react'

const ContactForm: FC = () => {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    })

    setSubmitting(false)
    setSubmitted(true)

    if (res.ok) setSuccess(true)
    else setSuccess(false)
  }

  return (
    <>
      {!submitting && success && (
        <>
          <p className='mt-10 text-center text-green-500'>
            Thank you for your interest! We will be in touch shortly.
          </p>
          <p className='text-center text-green-500'>
            ~See you later, alligator~
          </p>
        </>
      )}

      {!success && (
        <>
          {!submitting && submitted && (
            <p className='mt-10 text-center text-red-500'>
              There was an error in your submission, please try again or email{' '}
              <a
                href='mailto:contact@gator.sh'
                className='text-green-500 underline'
              >
                hi@gator.sh
              </a>
              .
            </p>
          )}

          <form className='mt-10' onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='name'
                  className='peer-focus:font-medium absolute text-sm text-black/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Name
                </label>
              </div>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  name='organization'
                  id='organization'
                  className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='organization'
                  className='peer-focus:font-medium absolute text-sm text-black/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Organization (e.g. Mayo Clinic)
                </label>
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  name='title'
                  id='title'
                  className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='title'
                  className='peer-focus:font-medium absolute text-sm text-black/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Title (e.g. VP of Innovation)
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
                  className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='phone'
                  className='peer-focus:font-medium absolute text-sm text-black/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='email'
                  className='peer-focus:font-medium absolute text-sm text-black/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Email address
                </label>
              </div>
            </div>
            <div className='relative z-0 w-full group'>
              <textarea
                name='comments'
                id='comments'
                className='block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                placeholder=' '
                rows={3}
              />
              <label
                htmlFor='comments'
                className='peer-focus:font-medium absolute text-sm text-black/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Comments
              </label>
            </div>

            <button
              type='submit'
              className='mt-10 mb-20 bg-[#34c759] text-white py-2 px-2 rounded w-full'
            >
              {submitting ? (
                <>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 mx-auto text-gray-200 animate-spin fill-green-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                  <span className='sr-only'>Loading...</span>
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </>
      )}
    </>
  )
}

export default ContactForm
