import React from 'react'
import Animated from './Animated'

export default function Hero() {
  return (
    <section id="home" className="card flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <Animated>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Pavan Sai Bodapari</h1>
            <p className="mt-2 text-slate-300">Aspiring Data Analyst focused on data storytelling, visualization, and actionable insights.</p>
            <div className="mt-4 text-sm text-slate-300 space-y-1">
              <div>College: DNR College Of Engineering And Technology</div>
              <div>CGPA: 7.99</div>
              <div>Open to Data Analyst roles</div>
            </div>
          </div>
        </Animated>
        <Animated index={2} hover>
          <div className="mt-6 lg:mt-0">
            <div className="bg-slate-900 rounded-md p-4 text-sm text-slate-200 text-right">
              <div>Phone: +91 8297416141</div>
              <div>Email: pavansaibodapati4@gmail.com</div>
              <div className="mt-2 space-x-3">
                <a className="text-accent hover:underline" href="https://github.com/pavan-sai-bodapati4" target="_blank">GitHub</a>
                <a className="text-accent hover:underline" href="https://www.linkedin.com/in/pavan-sai-bodapati-780b69225" target="_blank">LinkedIn</a>
                <a className="text-accent hover:underline" href="https://leetcode.com/u/pavansai_1234/" target="_blank">LeetCode</a>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </section>
  )
}