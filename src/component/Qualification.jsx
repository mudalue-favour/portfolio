import React from 'react'
import { useState } from 'react'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="Qualification">
      <div className="header-text">
        <h2 className="section-title">Qualifications</h2>
        <p className="section-subtitle">My personal journey</p>
      </div>

      <div className="qualification-container container">
        <div className="qualification-tab">
          <div
            className={
              toggleState === 1
                ? 'qualification-button  qualification-active'
                : 'qualification-button  '
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification-button  qualification-active'
                : 'qualification-button  '
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase qualification-icon"></i>Experience
          </div>
        </div>

        <div className="qualification-section">
          <div
            className={
              toggleState === 1
                ? 'qualification-content qualification-content-active'
                : 'qualification-content '
            }
          >
            <div className="qualification-data">
              <div>
                <h5 className="qualification-title">We development</h5>
                <span className="qualification-subtitle">Spain-institute</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i>2012-1292
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h5 className="qualification-title">Web development</h5>
                <span className="qualification-subtitle">Spain-institute</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i>2012-1292
                </div>
              </div>
            </div>
            <div className="qualification-data">
              <div>
                <h5 className="qualification-title">Web development</h5>
                <span className="qualification-subtitle">Spain-institute</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i>2012-1292
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h5 className="qualification-title">Web development</h5>
                <span className="qualification-subtitle">Spain-institute</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i>2012-1292
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification-content qualification-content-active'
                : 'qualification-content '
            }
          >
            <div className="qualification-data">
              <div>
                <h5 className="qualification-title">Web development</h5>
                <span className="qualification-subtitle">Spain-institute</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i>2012-1292
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h5 className="qualification-title">Web development</h5>
                <span className="qualification-subtitle">Spain-institute</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i>2012-1292
                </div>
              </div>
            </div>
            <div className="qualification-data">
              <div>
                <h5 className="qualification-title">Web development</h5>
                <span className="qualification-subtitle">Spain-institute</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i>2012-1292
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h5 className="qualification-title">Web development</h5>
                <span className="qualification-subtitle">Spain-institute</span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i>2012-1292
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
