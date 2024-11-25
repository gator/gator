'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useSearchParams } from 'next/navigation'

export default function SignInPage() {
  const searchParams = useSearchParams()
  const demo = searchParams.get('demo')

  return (
    <div className='text-black'>
      <SignIn.Root>
        <SignIn.Step
          name='start'
          className='w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8'
        >
          <header className='text-center'>
            <h1 className='mt-4 text-xl font-medium tracking-tight text-zinc-950'>
              Gator Authentication
            </h1>
          </header>
          <Clerk.GlobalError className='block text-sm text-red-400' />
          <div className='space-y-4'>
            <Clerk.Field name='identifier' className='space-y-2'>
              <Clerk.Label className='text-sm font-medium text-zinc-950'>
                Email
              </Clerk.Label>
              <div>
                <Clerk.Input
                  type='text'
                  required
                  className='w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400'
                  value={demo && 'ali.gator@gator.sh'}
                />
              </div>
              <Clerk.FieldError className='block text-sm text-red-400' />
            </Clerk.Field>
            <Clerk.Field name='password' className='space-y-2'>
              <Clerk.Label className='text-sm  font-medium text-zinc-950'>
                Password
              </Clerk.Label>
              <Clerk.Input
                type='password'
                required
                className='w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400'
                value={demo && 'ilovegator'}
              />
              <Clerk.FieldError className='block text-sm text-red-400' />
            </Clerk.Field>
          </div>
          <SignIn.Action
            submit
            className='w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70'
          >
            Sign In
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}
