import React from 'react'
import Animated from './Animated'

export default function Hero() {
  return (
    <section id="home" className="card flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <Animated>
          <div className="flex items-center gap-6">
            <div className="avatar-wrap">
              <img src="/Photo.jpg" alt="Pavan Sai" className="w-28 h-28 rounded-full object-cover avatar-ring" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Pavan Sai Bodapari</h1>
              <p className="mt-2 text-slate-300">Aspiring Data Analyst focused on data storytelling, visualization, and actionable insights.</p>
              <div className="mt-4 text-sm text-slate-300 space-y-1">
                <div>College: DNR College Of Engineering And Technology</div>
                <div>CGPA: 7.99</div>
                <div>Open to Data Analyst roles</div>
              </div>
            </div>
          </div>
        </Animated>
        <div className="flex flex-col gap-4">
          <Animated index={2} hover>
            <div className="bg-slate-900 rounded-md p-4 text-sm text-slate-200 text-right contact-card">
              <div className="flex items-center justify-end gap-3"><span className="opacity-90">Phone:</span> <span className="font-medium">+91 8297416141</span></div>
              <div className="flex items-center justify-end gap-3"><span className="opacity-90">Email:</span> <span className="font-medium">pavansaibodapati4@gmail.com</span></div>
              <div className="mt-2 space-x-3">
                <a className="text-accent hover:underline" href="https://github.com/pavan-sai-bodapati4" target="_blank">GitHub</a>
                <a className="text-accent hover:underline" href="https://www.linkedin.com/in/pavan-sai-bodapati-780b69225" target="_blank">LinkedIn</a>
                <a className="text-accent hover:underline" href="https://leetcode.com/u/pavansai_1234/" target="_blank">LeetCode</a>
              </div>
            </div>
          </Animated>
          <Animated index={3} hover>
            <div className="certs p-4 rounded-md bg-gradient-to-r from-slate-800/60 to-slate-700/40 border cert-border">
              <h3 className="font-medium text-white">Certifications</h3>
              <ul className="mt-3 text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li>Python Full Stack · LTE Tech Soft · June 2023 - March 2024</li>
                <li>AI Powered Data Analytics · Frontlines Media · July 2025 - Present</li>
              </ul>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  )
}