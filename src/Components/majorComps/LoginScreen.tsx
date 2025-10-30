import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from "next/link"

export default function LoginScreen() {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen bg-gray-100 px-4 lg:px-0'>
      
      {/*logo goes here*/}
      <div className='mt-4 text-lg font-bold'>logo</div>

      {/*login form*/}
      <div className='flex flex-col items-start w-full max-w-sm bg-white shadow-md rounded-2xl p-6 lg:p-10'>
        
        <h1 className='w-full mb-6 text-center text-2xl font-semibold text-gray-800'>
          Login
        </h1>

        <form className='space-y-4 w-full'>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input type='email' placeholder='JohnDoe@example.com' />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input type='password' placeholder='••••••••' />
          </div>

          <Button className='w-full mt-4 bg-blue-600 hover:bg-blue-700'>
            Login
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Button asChild variant="link">
            <Link href="/register">Sign up</Link>
          </Button>
        </p>
      </div>

  
      <div className="mb-4 text-center text-sm text-gray-500">
        whispr{' '}
        <Button asChild variant="link">
          <Link href="/about" className='text-gray-500'>Q&A?</Link>
        </Button>
      </div>

    </div>
  )
}

// you need to add the logo, and add a link for the site onclick ++ add onclick for the Q&A button