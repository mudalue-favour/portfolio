import React from 'react'
import Works from './Works'
const Work = () => {
  return (
    <section
      className="work section"
      id="portfolio"
      data-aos="fade-up"
      data-aos-duration="3500"
    >
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">Most recent works</span>

      <Works />
    </section>
  )
}

export default Work
