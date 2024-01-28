import React from 'react'
import ProfilePic from '../assets/ProfilePic.jpg'
import Lottie from 'lottie-react'
import SoccerBallAnimation from "../assets/SoccerBallAnimation.json"

const Bio = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 rounded-2xl mb-2' style={{backgroundColor: '#75010b', height: '10vh', width: '400px'}}>
        <h1 className='text-4xl font-bold my-auto shadow-lg'>Matthew Reep</h1>
      </div>
      <div style={{backgroundColor: 'white', height: 'fit-content', width: '400px'}} className='border-4 p-5 rounded-2xl'>
        <div className='flex'>
          <img src={ProfilePic} alt="" className='rounded-full w-48' />
          <Lottie animationData={SoccerBallAnimation} className='w-1/2'/>
        </div>
        <p className='font-mono mt-5'>
          Full-Stack software developer ready to take on new challenges and projects. Recently attended
          Coding Dojo becoming certified in JavaScript and Python!
        </p>
      </div>
      <div style={{backgroundColor: 'white', height: 'fit-content', width: '400px'}} className='border-4 p-5 rounded-2xl mt-5'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold my-auto shadow-lg'>More about Matt</h2>
          <p className='font-mono mt-5'>Beyond code, I bring a collaborative spirit and team player mentality. I thrive in dynamic environments where ideas ignite and projects evolve. 
          My communication skills ensure I'm always in sync, ready to contribute creatively and learn from seasoned engineers. I'm not just seeking a job, I'm seeking a coding adventure. 
          A team where I can contribute, learn, and grow, pushing the boundaries of what's possible with every line of code. </p>
        </div>
      </div>
    </div>
  )
}

export default Bio