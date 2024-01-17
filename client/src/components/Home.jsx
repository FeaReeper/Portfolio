import React from 'react'
import { useState } from 'react'
import Nav from './Nav'
import SimpleImageSlider from 'react-simple-image-slider'
import Certificate from '../assets/Certificate.jpg'
import Bio from './Bio'
import Projects from './Projects'

const Home = () => {
const slides = [Certificate]
const [imageNum, setImageNum] = useState(0)

  return (
    <div className='background-image'>
      <div className='mt-8'>
        <Nav/>
      </div>
      <div className='flex justify-center my-10 gap-10'>
        <div>
          <Bio/>
        </div>
        <div className='border-4 p-5' style={{height: "625px"}}> 
          <SimpleImageSlider
            width={800}
            height={575}
            images={slides}
            showNavs={true}
            autoPlay={true}
            onStartSlide={(index, length) => {
              setImageNum(index - 1)
            }}
            autoPlayDelay={3}
          />
        </div>
        <div>
          <Projects/>
        </div>
      </div>
    </div>
  )
}

export default Home