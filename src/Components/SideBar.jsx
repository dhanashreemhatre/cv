import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin ,FaInstagram,FaTwitter } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';


function Navbar() {
  return (
    <div className='sidebar flex flex-col justify-self-center p-4 mt-20'>
      <div>
        <h1 className='text-6xl font-sans'>Hello <br/>I am <span className='gradient-text hover:font-serif'>&lt;Dhanashree/&gt;</span></h1>
        <h4 className='text-2xl mt-3'>| Full stack Developer | Python Developer |</h4>
        <p className='text-lg mt-5 text-slate-400'>I build pixel-perfect, engaging, and accessible digital experiences.</p>
      </div>
      <div className='navigation my-8 bg-gradient-to-r from-cyan-500 to-blue-500 p-8 grid grid-flow-row auto-rows-max gap-5'>
      <Link className='nav-item' activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
      <Link className='nav-item' activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}>Experience</Link>
      <Link className='nav-item' activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>

      </div>
      <div className='my-4 flex gap-4'>
      <FaGithub className='text-2xl'/>
      <FaLinkedin className='text-2xl'/>
      <FaInstagram className='text-2xl'/>
      <FaTwitter className='text-2xl'/>
      </div>
    </div>
  )
}

export default Navbar