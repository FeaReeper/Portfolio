import React from 'react'
import Nav from './Nav'
import Certificate from '../assets/Certificate.jpg'
import JavaScript from '../assets/JavaScriptMERN.png'
import Python from '../assets/PythonFlask.png'
import Bio from './Bio'
import Projects from './Projects'

const Home = () => {


  return (
    <div className='background-image'>
      <div>
        <Nav/>
      </div>
      <div className='flex flex-col my-10 gap-10 w-auto sm:flex-row'>
        <div className='sm:flex-1'>
          <Bio/>
        </div>
        <div className='sm:flex-1'>
          <div>
            <Projects/>
          </div>
          <div className='p-5 mx-2 lg:w-1/2 m-5 lg:mx-auto'>
            <img src={Certificate} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home