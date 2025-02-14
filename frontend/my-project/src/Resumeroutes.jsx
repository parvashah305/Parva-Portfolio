import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Workexperience from './Components/Workexperience'
import Education from './Components/Education'
import Skills from './Components/Skills'

const Resumeroutes = () => {
  return (
    <>
        
        <Navbar/>
        <div className='mt-20 text-4xl font-bold text-center text-black'>
            Resume
        </div>
        <Workexperience/>
        <hr className="border-t border-gray-500 mb-12 mx-10" />
        <Education/>
        <hr className="border-t border-gray-500 mb-12 mx-10" />
        <Skills/>
        <Footer/>
    </>
  )
}

export default Resumeroutes