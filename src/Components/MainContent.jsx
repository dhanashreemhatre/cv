import React from 'react'
import About from './sections/About'
import Experience from './sections/Experience'
import Project from './sections/Project'

function MainContent() {
  return (
    <div className='sidebar flex flex-col justify-self-center p-4 mt-20'>
      <h1>Hello</h1>
        <About/>
        <Experience/>
        <Project/>
    </div>
  )
}

export default MainContent