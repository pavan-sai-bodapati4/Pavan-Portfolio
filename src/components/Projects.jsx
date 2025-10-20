import React from 'react'
import Animated from './Animated'

const projects = [
  {
    title: 'Titanic Survival Analysis',
    description: 'A data storytelling project built on the Titanic dataset to uncover patterns behind passenger survival. End-to-end data cleaning, transformation, and an interactive Power BI dashboard.',
    link: 'https://github.com/pavan-sai-bodapati4/Titanic_survival_analysis.git'
  },
  {
    title: 'Adults Data Dashboard',
    description: 'Comprehensive analysis of adult demographic and income data exploring relationships between education, marital status, gender, and income categories.',
    link: 'https://github.com/pavan-sai-bodapati4/Adults-Data-Dashboard-Income-Education-and-Demographics-Overview.git'
  },
  {
    title: 'New York Real Estate',
    description: 'Dashboard overview of NY real estate market showing prices, beds, baths, and segmentation by county, property type, and status.',
    link: 'https://github.com/pavan-sai-bodapati4/New-York-Real-Estate-Dashboard-Price-Property-Type-County-Insights.git'
  }
]

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Animated key={p.title} index={i + 1} className="card">
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
            <a className="mt-4 inline-block text-accent hover:underline text-sm" href={p.link} target="_blank">View on GitHub</a>
          </Animated>
        ))}
      </div>
    </section>
  )
}