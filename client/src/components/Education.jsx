import React from 'react'
import Certificate from '../assets/Certificate.jpg'

const Education = () => {
  return (
    <div>
      <div style={{backgroundColor: '#a29061', height: '10vh', width: '40vw', display: 'flex', alignItems: "center", paddingLeft: '20px'}}>
        <p className='text-4xl text-white'>Education</p>
      </div>
      <div style={{backgroundColor: 'white', width: '40vw', borderLeft: '2px solid black', borderRight: '2px solid black', borderBottom: '2px solid black'}}>
        <p className='pl-5 pt-5'>May 2023 - Nov 2023</p>
        <p className='pl-5'>Coding Dojo Graduate - Full Stack JavaScript and Python Developer</p>
        <img src={Certificate} alt="Coding Dojo Certificate" className='mx-auto' style={{padding: "10px", height: "450px"}} />
      </div>
    </div>
  )
}

export default Education