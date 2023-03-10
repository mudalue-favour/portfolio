import React from 'react'

const Skills = () => {
  return (
    <section
      className="skills"
      id="skills"
      data-aos="fade-up"
      data-aos-duration="4000"
    >
      <div className="header-text">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">My Technical level</p>
      </div>

      <div className="container skill-row">
        <div className="row ">
          <div className="col">
            <h5>
              <i class="uil uil-crosshairs"></i> HTML
            </h5>
            <p>intermidiate</p>

            <h5>
              <i class="uil uil-crosshairs"></i> CSS
            </h5>
            <p>intermidiate</p>
            <h5>
              <i class="uil uil-crosshairs"></i> Bootstrap
            </h5>
            <p>intermidiate</p>
          </div>
          <div className="col">
            <h5>
              <i class="uil uil-crosshairs"></i> GIT
            </h5>
            <p>basic</p>

            <h5>
              <i class="uil uil-crosshairs"></i> REACT
            </h5>
            <p>basic</p>
            <h5>
              <i class="uil uil-crosshairs"></i> Javascript
            </h5>
            <p>basic</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
