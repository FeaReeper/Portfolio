import React from 'react'
import LittleBuckets from '../assets/LittleBuckets.png'
import GameCorner from '../assets/GameCorner.png'

const Projects = () => {
  return (
    <div>
    <div className='flex justify-center rounded-2xl mb-2' style={{backgroundColor: '#75010b', height: '10vh', width: '400px'}}>
      <h1 className='text-4xl font-bold my-auto shadow-lg'>Projects</h1>
    </div>
    <div style={{backgroundColor: 'white', height: '780px', width: '400px'}} className='border-4 rounded-2xl overflow-scroll'>
      <div className='p-5'>        
        <a href="http://3.129.17.64/"><h2 className='font-bold text-xl'>Little Buckets</h2></a>
        <img className='my-3' src={LittleBuckets} alt="" />
        <p>A Full-Stack JavaScript/MERN application using Vite, React, Bootstrap for the front-end, and Express and MongoDB for the back-end.</p>
      </div>
      <div className='p-5 mb-3'>        
        <a href=""><h2 className='font-bold text-xl'>Matt's Gaming Corner</h2></a>
        <img className='my-3' src={GameCorner} alt="" />
        <p>A Full-Stack Python/Flask application using Flask and MySQL for the database.</p>
      </div>
      <div className='p-5 mb-3'>        
        <a href=""><h2 className='font-bold text-xl'>Matt's Gaming Corner</h2></a>
        <img className='my-3' src={GameCorner} alt="" />
        <p>A Full-Stack Python/Flask application using Flask and MySQL for the database.</p>
      </div>
    </div>
  </div>
  )
}

export default Projects