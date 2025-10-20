import React from 'react'
import Animated from './Animated'

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-700">
      <div className="container flex items-center justify-between py-4">
        <Animated>
          <a href="#home" className="brand">Pavan Sai Bodapari</a>
        </Animated>
        <nav className="site-nav flex gap-2 items-center overflow-x-auto whitespace-nowrap">
          <Animated index={2} hover>
            <a href="#projects">Projects</a>
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
            <a href="#contact">Contact</a>
          </Animated>
        </nav>
      </div>
    </header>
  )
}