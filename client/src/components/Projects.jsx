import React from 'react'
import LittleBuckets from '../assets/LittleBuckets.png'
import GameCorner from '../assets/GameCorner.png'

const Projects = () => {
  return (
    <div>
    <div className='flex justify-center rounded-2xl mb-2 bg-red p-5 w-96 mx-auto md:w-2/3'>
      <h1 className='text-4xl font-bold my-auto shadow-lg'>Deployed Projects</h1>
    </div>
    <div className='border-4 rounded-2xl overflow-scroll bg-white w-96 mx-auto md:w-2/3 project-height'>
      <div className='p-5'>        
        <a href="https://little-bucket.vercel.app/"><h2 className='font-bold text-xl'>Little Buckets</h2></a>
        <img className='my-3' src={LittleBuckets} alt="" />
        <p>A Full-Stack JavaScript/MERN application using Vite, React, Bootstrap for the front-end, and Express and MongoDB for the back-end.</p>
      </div>
      {/* <div className='p-5 mb-3'>        
        <a href=""><h2 className='font-bold text-xl'>Matt's Gaming Corner</h2></a>
        <img className='my-3' src={GameCorner} alt="" />
        <p>A Full-Stack Python/Flask application using Flask and MySQL for the database.</p>
      </div> */}
      {/* <div className='p-5 mb-3'>        
        <a href=""><h2 className='font-bold text-xl'>Matt's Gaming Corner</h2></a>
        <img className='my-3' src={GameCorner} alt="" />
        <p>A Full-Stack Python/Flask application using Flask and MySQL for the database.</p>
      </div> */}
    </div>
  </div>
  )
}

export default Projects