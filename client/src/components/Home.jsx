import React from 'react'
import { useState } from 'react'
import Nav from './Nav'
import Certificate from '../assets/Certificate.jpg'
import JavaScript from '../assets/JavaScriptMERN.png'
import Python from '../assets/PythonFlask.png'
import Bio from './Bio'
import Projects from './Projects'
import SimpleImageSlider from 'react-simple-image-slider'

const Home = () => {
  const slides = [JavaScript, Python]
  const [imageNum, setImageNum] = useState(0)


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
          <div className='lg:flex lg:w-2/3 lg:mx-auto'>
            <div className='p-5 mx-2 md:w-2/5 m-5 lg:mx-auto'>
              <img src={Certificate} alt="" />
            </div>
            <div className='p-5 mx-auto my-auto md:w-2/5 m-5'>
            <SimpleImageSlider
                width={400}
                height={280}
                images={slides}
                showNavs={true}
                autoPlay={true}
                onStartSlide={(index, length) => {
                  setImageNum(index - 1)
                }}
                autoPlayDelay={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home