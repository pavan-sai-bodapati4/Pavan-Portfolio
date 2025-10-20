import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/SkillsNew'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container mt-10">
        <Hero />
        <section className="mt-12">
          <Projects />
        </section>
        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <Experience />
          <Education />
        </section>
        <section className="mt-12">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  )
}