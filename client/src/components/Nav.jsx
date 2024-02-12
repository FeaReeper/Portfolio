import React from 'react'
import Lottie from 'lottie-react'
import FloatingComputer from '../assets/FloatingComputer.json'


const Nav = () => {
  return (
    <div className='bg-red rounded-2xl mx-auto mt-8 w-96 sm:w-5/6'>
      <div className='flex p-1 text-white w-full px-2 sm:w-full sm:justify-evenly'>
        <div className='flex gap-2'>
          <Lottie animationData={FloatingComputer} className='w-1/3 sm:w-1/6'/>
          <h1 className='my-auto font-bold text-xsm sm:text-3xl'>Hello World!</h1>
        </div>
        <div className='flex'>
          <a className='my-auto text-xs font-bold lg:text-lg' href="https://github.com/FeaReeper">GitHub</a>
          <a className='my-auto mx-2 text-xs font-bold lg:text-lg lg:mx-8' href="https://www.linkedin.com/in/matthew-reep-67bbb3279/">LinkedIn</a>
          <a className='my-auto text-xs font-bold lg:text-lg' href="https://docs.google.com/document/d/1oJ2gJXTX56heEjNA70HR7GB6bpoU71Ps7DQHKLK56GU/edit?usp=sharing">Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Nav