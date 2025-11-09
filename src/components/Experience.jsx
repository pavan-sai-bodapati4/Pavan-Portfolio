import React from 'react'
import Animated from './Animated'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  return (
    <Animated className="card" index={1}>
      <section id="experience">
    <h2 className="text-xl font-semibold flex items-center gap-2"><FaBriefcase /> Experience</h2>
        <div className="mt-3 text-sm text-slate-300">
          <div className="font-medium">Data Analyst at Source it Solutions</div>
          <div className="mt-1">JUN 2024 to MAY 2025</div>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Over one year of hands-on experience in data cleaning, analysis, and visualization using Microsoft Excel, Power Query,
and MySQL</li>
            <li>Collected, cleaned, and transformed large datasets using MS Excel and Power Query to ensure data accuracy and
consistency</li>
            <li>Developed SQL queries to extract, join, and aggregate data from multiple relational databases (MySQL).</li>
            <li>Exported and analyzed data in Excel to identify key sales and product performance trends.</li>
          </ul>
        </div>
      </section>
    </Animated>
  )
}