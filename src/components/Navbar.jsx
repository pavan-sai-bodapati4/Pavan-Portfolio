import React from 'react'
import Animated from './Animated'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-700">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Animated>
            <a href="#home" className="brand flex items-center gap-3">
              <img src="/Photo.jpg" alt="Pavan Sai" className="w-10 h-10 rounded-full object-cover border border-slate-700" />
              <span>Pavan Sai Bodapari</span>
            </a>
          </Animated>
        </div>
        <nav className="site-nav flex gap-2 items-center overflow-x-auto whitespace-nowrap hide-scrollbar">
          <Animated index={2} hover>
            <a href="#projects" className="text-accent flex items-center gap-2"><span>Projects</span></a>
          </Animated>
          <Animated index={3} hover>
            <a href="#experience">Experience</a>
          </Animated>
          <Animated index={4} hover>
            <a href="#education">Education</a>
          </Animated>
          <Animated index={5} hover>
            <a href="#skills">Skills</a>
          </Animated>
          <Animated index={6} hover>
            <a href="#contact" className="text-accent flex items-center gap-2"><FaLinkedin />Contact</a>
          </Animated>
        </nav>
      </div>
    </header>
  )
}