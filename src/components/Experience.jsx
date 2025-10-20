import React from 'react'
import Animated from './Animated'

export default function Experience() {
  return (
    <Animated className="card" index={1}>
      <section id="experience">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-3 text-sm text-slate-300">
          <div className="font-medium">Front End Developer at Source it Solutions</div>
          <div className="mt-1">JUN 2024 to NOV 2024</div>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Developed responsive web applications using React.js with component-based architecture.</li>
            <li>Used SQL for basic data retrieval and table management to support app flows.</li>
            <li>Applied MS Excel and Power Query to automate data transformation for reporting.</li>
          </ul>
        </div>
      </section>
    </Animated>
  )
}