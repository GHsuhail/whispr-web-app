import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { ThemeToggle } from './ThemeToggle'
export default function AboutWhispr() {
    
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

    
      <Accordion
      type="single"
      collapsible
      className="w-full px-10 lg:px-48"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Whisper Box?</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance text-base'>
          <p>Whisper Box is a minimalistic social discussion platform where users post
          short thoughts or questions (“whispers”) and get responses from other
          users. It’s inspired by Reddit and 4chan but built to keep discussions
          clean, focused, and time-efficient.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why remove threaded comments?</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance text-base'>
          <p>
Because endless back-and-forth arguments waste time and bury valuable insights.
WhisprBox is designed for clarity and focus — users reply to the post, not to each other.

We focus on collecting different perspectives, not hosting fights.((we are not twitter/X))</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Why the minimalism?</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance text-base'>

        <p>  
          Modern platforms overload users with comments, votes, sidebars, notifications, da da da da.
if u admire the the noise of other social media platforms, go for them!

       </p>
        </AccordionContent> 
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Who can see my whispers(posts)?</AccordionTrigger>  
        <AccordionContent className='flex flex-col gap-4 text-balance text-base'>
         <p> your followers, and if your account is public, anyone who searches for words within your whisper.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>How does the discovery system work?</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance text-base'>
          <p>There are no subforums or “/r aka subreddit, etc..” communities.
Instead, people find posts through:
Their following list (like Instagram), or Keyword searches inside post content.
This way, content naturally reaches users interested in the topic, without needing structured communities.
</p>
        </AccordionContent> 
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>How do I gain followers on Whisper Box?</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance text-base'>
          <p>
           <p>-consistently posting, followers come naturaly when your posts add value or emotion.</p> 
           <p> -use hashtags relevant ones.</p>
           <p> -You can bring your followers from other platforms 😉</p>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>briefly what are the Tos?</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-4 text-balance text-base'>
          <p>

          
<p>- No hate speech, harassment, or illegal content.
</p>
<p>- Respect others' privacy.
</p>
<p>-Doxxing is prohibited.
</p>
<p>-no glorification of violence.
</p>
<p>
  -no glorification of radical ideologies/ movements.
</p>
<p>
       -to learn more please visit the full TOS page.
</p>
 
          </p>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
   </div>
  )
}


/*
What is Whisper Box?

Whisper Box is a minimalistic social discussion platform where users post short thoughts or questions 
(“whispers”) and get responses from other users. It’s inspired by Reddit and 4chan but built to keep discussions clean,
 focused, and time-efficient.
 ----------------------------------------------------------
Why remove threaded comments?

Because endless back-and-forth arguments waste time and bury valuable insights.
WhisprBox is designed for clarity and focus — users reply to the post, not to each other.
We focus on collecting different perspectives, not hosting fights.((we are not twitter/X))
----------------------------------------------------------
Why the minimalism?

Modern platforms overload users with comments, votes, sidebars, notifications, da da da da.
if u admire the the noise of other social media platforms, go for them!
------------------------------------------------------------
Who can see my whispers(posts)?
your followers, and if your account is public, anyone who searches for words within your whisper.
------------------------------------------------------------
How does the discovery system work?

There are no subforums or “/r aka subreddit, etc..” communities.
Instead, people find posts through:

Their following list (like Instagram), or

Keyword searches inside post content.
This way, content naturally reaches users interested in the topic, without needing structured communities.
------------------------------------------------------------
How do I gain followers on Whisper Box?

-consistently posting, followers come naturaly when your posts add value or emotion.
-use hashtags relevant ones.
-You can bring your followers from other platforms 😉
------------------------------------------------------------
briefly what are the Tos?
- No hate speech, harassment, or illegal content.
- Respect others' privacy.
-Doxxing is prohibited.
-no glorification of violence.
-no glorification of radical ideologies/ movements.
  to learn more please visit the full TOS page.



/*/
