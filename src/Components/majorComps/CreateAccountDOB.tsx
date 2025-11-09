import React from 'react'
import { ThemeToggle } from './ThemeToggle'

 export default function CreateAccountDOB () 
 {
    return (
        
    <div>
         {/*header goes here*/}
               <div className ='flex justify-between w-full px-10 py-5 lg:justify-center'>
                    <div className =''>
                      <img
                        src='Images/whisprPhone.png'
                        alt = 'Whispr'
                        className='block lg:hidden w-24'
                      />
                      <img
                        src='Images/whisprDesktop.png'
                        alt = 'Whispr'
                        className='hidden lg:block w-32'
                      />
                    </div>
                    <div className ='text-xl lg:absolute lg:right-8 py-7 lg:py-5'><ThemeToggle/></div>
                  </div>
                  {/*header (logo and toggle(dark light)) form*/}
        
            

    </div>
  )
}
  


