import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from "next/link"
export default function LoginScreen() {
  return (
       <div className='flex items-center justify-between h-screen flex-col  bg-gray-100'>
        <div className='mt-4'>logo</div>

        <div className = 'flex flex-col items-start w-full max-w-sm bg-white shadow-md rounded-2xl p-10'>
            <h1 className = ' w-full mb-6 text-center text-2xl font-semibold text-gray-800'>
            Login
            </h1>
            <form className='space-y-4 w-full'>
              <div>
                <label
                htmlFor="email"
              className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input type='email' placeholder='JohnDoe@example.com'/>
                
              </div>

                <div>
                  <label
                  htmlFor="password"
              className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Input type='Password' placeholder='••••••••'/>
                </div>
                <Button className='w-full mt-4 bg-blue-600 hover:bg-blue-700'>
                  Login
                  </Button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-500">
      Don't have an account?
      <Button asChild variant="link">
        <Link href="/register">Sign up</Link>
      </Button>
    </p>
          

          <div/>

        </div> 

        <div>
          

      <p className="mt-4 text-center text-sm text-gray-500">
      whispr
      <Button asChild variant="link">
        <Link href="/about" className=' text-gray-500'>Q&A?</Link>
      </Button>
    </p>
          
        </div>
       
      </div>
  )
}
