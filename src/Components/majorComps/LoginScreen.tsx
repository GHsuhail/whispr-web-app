import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from "next/link"
import { ThemeToggle } from './ThemeToggle'
export default function LoginScreen() {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen bg-background px-4 lg:px-0'>
      
      {/*header goes here*/}
      <div className ='flex justify-between w-full px-10 py-5 lg:justify-center'>
        <div className ='text-xl text-amber-400'>LOGO</div>
        <div className ='text-xl lg:absolute lg:right-8'><ThemeToggle/></div>
      </div>
      {/* END END END **header (logo and toggle(dark light)) form ** END END END*/}
      <div className='flex flex-col items-start w-full max-w-sm bg-secondary shadow-md rounded-2xl p-6 lg:p-10'>
        
        <h1 className='w-full mb-6 text-center text-2xl font-semibold text-foreground'>
          Login
        </h1>

        <form className='space-y-4 w-full'>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </label>
            <Input type='email' placeholder='JohnDoe@example.com' />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
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