import React from 'react'
import About from './sections/About'
import Experience from './sections/Experience'
import Project from './sections/Project'
import Projects from './sections/Projects/Projects'


function MainContent({isDarkMode}) {
  return (
    <div className={`sidebar ${isDarkMode?'dark':'light'} flex flex-col justify-self-center p-4`}>
     
        <About/>

        <Projects/>
    </div>
  )
}

export default MainContent