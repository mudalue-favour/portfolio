import React from 'react'
import profile from './Assets/profile-img.jpg'
import CV from './Assets/CV.pdf'

const About = () => {
  return (
    <section className=" about" id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">My Introduction</p>

      <div className="container about-main">
        <div className="row about-row">
          <div className="col-sm-6 about-img">
            <img src={profile} alt="" srcset="" className="about-img" />
          </div>
          <div className="col-sm-6 about-data">
            <div className="row about-icons">
              <div className="col-lg-4 col-sm-6 col-xs-6 about-box">
                <i class="uil uil-award"></i>
                <h5 className="">Experience</h5>
                <span className="">1 year experience</span>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-6 about-box">
                <i class="uil uil-briefcase"></i>
                <h5 className="">Completed</h5>
                <span className="">2+ projects</span>
              </div>

              <div className="col-lg-4 col-sm-12  col-xs-12 about-box">
                <i class="uil uil-bolt"></i>
                <h5 className="">Support</h5>
                <span className="">online 24/7</span>
              </div>
            </div>
            <div className="about-info">
              <p className="about-desc">
                Frontend developer, i create web pages and apps. i have
                littleexperience and make sure my clients are always satisfied
                and happy
              </p>

              <a download="" href={CV} className="cv-button button">
                Download CV <i class="uil uil-file-import"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
