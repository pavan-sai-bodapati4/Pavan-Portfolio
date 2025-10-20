import React from 'react'
import Animated from './Animated'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 border-t border-slate-700 py-8">
      <div className="container">
        <Animated>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div>
              <div className="font-medium">Interested in hiring?</div>
              <div className="text-slate-300 text-sm">I am applying for Data Analyst roles — available to discuss opportunities.</div>
            </div>
            <div className="text-sm text-slate-300">
              <div>Phone: +91 8297416141</div>
              <div>Email: pavansaibodapati4@gmail.com</div>
              <div className="mt-2 space-x-3 flex items-center justify-end">
                <a className="text-accent hover:underline inline-flex items-center gap-2" href="https://github.com/pavan-sai-bodapati4" target="_blank"><FaGithub /> GitHub</a>
                <a className="text-accent hover:underline inline-flex items-center gap-2" href="https://www.linkedin.com/in/pavan-sai-bodapati-780b69225" target="_blank"><FaLinkedin /> LinkedIn</a>
              </div>
            </div>
          </div>
        </Animated>
        <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Pavan Sai Bodapari</div>
      </div>
    </footer>
  )
}