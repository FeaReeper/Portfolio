import React from 'react'
import Lottie from 'lottie-react'
import FloatingComputer from '../assets/FloatingComputer.json'


const Nav = () => {
  return (
    <div className=' nav-background-image rounded-2xl mx-10'>
      <div className='flex justify-between w-4/5 mx-auto p-1 text-white'>
        <div className='flex gap-5'>
          <Lottie animationData={FloatingComputer} className='w-1/6'/>
          <h1 style={{color: "#e2d6c9", fontSize: "32px"}} className='my-auto font-bold'>Hello World!</h1>
        </div>
        <div className='flex justify-evenly w-96'>
          <a style={{color: "#e2d6c9"}} className='my-auto text-xl font-bold' href="https://github.com/FeaReeper">My GitHub |</a>
          <a style={{color: "#e2d6c9"}} className='my-auto text-xl font-bold' href="https://www.linkedin.com/in/matthew-reep-67bbb3279/">My LinkedIn |</a>
          <a style={{color: "#e2d6c9"}} className='my-auto text-xl font-bold' href="https://docs.google.com/document/d/1oJ2gJXTX56heEjNA70HR7GB6bpoU71Ps7DQHKLK56GU/edit?usp=sharing">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Nav