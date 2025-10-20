import React from 'react'
import Animated from './Animated'
import { FaCircle } from 'react-icons/fa'

const skills = [
  'JavaScript',
  'Python',
  'MS Excel',
  'MySQL',
  'Power Query',
  'Power BI',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn'
]

export default function SkillsNew() {
  return (
    <Animated className="card" index={3}>
      <section id="skills">
        <h2 className="text-xl font-semibold">Skills & Tools</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Animated key={s} index={i + 1} hover>
              <span className="px-3 py-1 rounded-md bg-slate-700 text-sm cursor-default inline-flex items-center gap-2"><FaCircle className="text-amber-400 text-[10px]" />{s}</span>
            </Animated>
          ))}
        </div>
        <div className="mt-6 text-sm text-slate-300">
          <div className="font-medium">Certifications</div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Python Full Stack · LTE Tech Soft · June 2023 - March 2024</li>
            <li>AI Powered Data Analytics · Frontlines Media · July 2025 - Present</li>
          </ul>
        </div>
      </section>
    </Animated>
  )
}
