import React from 'react'
import Animated from './Animated'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  return (
    <Animated className="card" index={2}>
      <section id="education">
    <h2 className="text-xl font-semibold flex items-center gap-2"><FaGraduationCap /> Education</h2>
        <div className="mt-3 text-sm text-slate-300 space-y-3">
          <div>
            <div className="font-medium">DNR College of Engineering and Technology</div>
            <div>B.Tech - Computer Science and Engineering · CGPA: 7.99 · Aug 2019 – June 2023</div>
          </div>
          <div>
            <div className="font-medium">Vidya Vikas Junior College</div>
            <div>12th State Board · CGPA: 9.46 · June 2017 – Mar 2019</div>
          </div>
          <div>
            <div className="font-medium">ZP High School Chinakapavaram</div>
            <div>10th State Board · CGPA: 8.5 · Mar 2017</div>
          </div>
        </div>
      </section>
    </Animated>
  )
}