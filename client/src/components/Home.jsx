import React from 'react'
import { useState } from 'react'
import Nav from './Nav'
import Certificate from '../assets/Certificate.jpg'
import Bio from './Bio'
import Projects from './Projects'
import JS from '../assets/JS.png'
import Py from '../assets/py.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'

const Home = () => {


  return (
    <div className='background-image'>
      <div>
        <Nav/>
      </div>
      <div className='my-10 sm:flex-row'>
        <div>
          <Bio/>
        </div>
        <div>
          <div className='mt-10'>
            <Projects/>
          </div>
          <div className='p-5 m-5'>
            <img className='sm:w-8/12 mx-auto' src={Certificate} alt="" />
          </div>
          <div>
            <div>
              <h1 className='text-4xl text-center font-bold'>Languages</h1>
            </div>
            <div>
              <div className='flex mx-auto justify-between w-11/12 sm:w-8/12 my-5'>
                <div className='text-center'>
                  <img className='w-8/12 mx-auto' src={JS} alt="" />
                  <p className='font-bold shadow-lg text-xl'>JavaScript</p>
                </div>
                <div className='text-center'>
                  <img className='w-8/12 mx-auto' src={Py} alt="" />
                  <p className='font-bold shadow-lg text-xl'>Python</p>
                </div>
                <div className='text-center'>
                  <img className='w-8/12 mx-auto' src={HTML} alt="" />
                  <p className='font-bold shadow-lg text-xl'>HTML5</p>
                </div>
                <div className='text-center'>
                  <img className='w-8/12 mx-auto' src={CSS} alt="" />
                  <p className='font-bold shadow-lg text-xl'>CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home