import React from 'react'
import ProfilePic from '../assets/ProfilePic.jpg'
import Lottie from 'lottie-react'
import SoccerBallAnimation from "../assets/SoccerBallAnimation.json"

const Bio = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 rounded-2xl mb-2 bg-red p-5 w-96 mx-auto md:w-2/3'>
        <h1 className='text-4xl font-bold my-auto shadow-lg'>Matthew Reep</h1>
      </div>
      <div className='w-96 mx-auto md:w-2/3 2xl:gap-60 2xl:flex'>
        <div className='border-4 p-5 rounded-2xl bg-white h-fit 2xl:flex-1'>
          <div className='flex md:justify-evenly'>
            <img src={ProfilePic} alt="" className='rounded-full w-48 md:w-1/3 md:h-1/3' />
            <Lottie animationData={SoccerBallAnimation} className='w-1/2 md:w-1/4'/>
          </div>
          <p className='font-mono mt-5 md:w-3/4 md:mx-auto'>
            Full-Stack software developer ready to take on new challenges and projects. Recently attended
            Coding Dojo becoming certified in JavaScript and Python!
          </p>
          <p className='font-mono mt-5 md:w-3/4 md:mx-auto'>I love those who love me, and those who seek me find me. - Proverbs 8:17</p>
        </div>
        <div className='border-4 p-5 mt-5 rounded-2xl bg-white h-fit 2xl:mt-0 2xl:flex-1'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold my-auto shadow-lg'>More about Matt</h2>
            <p className='font-mono mt-5 md:p-2'>Beyond code, I am a 90's baby happily married to my amazing wife, Naomi. As of October 2023 the Reep family
            became familyCount++ adding our beautiful little girl Nya! I can't forget our two energetic dogs, Khloe and Kora. We all love to 
            travel whether it's camping, beach trip, or heading out of the country. If you can't tell, huge soccer supporters - GO ATL UTD!!!
            Lastly, and most importantly, I am a follower of Jesus, no matter what any of us go through, we can always count on Him to be there.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio