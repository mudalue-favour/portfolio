import React from 'react'

const header = () => {
  return (
    <div className="Header">
      <div className="navbar">
        <nav class="navbar navbar-expand-lg navbar-expand-md  fixed-top ">
          <div class="container">
            <a class="navbar-brand" href="#home">
              M.uxor
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i class="uil uil-apps"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">
                    <i class="uil uil-estate nav-icon"></i> Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    <i class="uil uil-user nav-icon"></i> About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#skills">
                    <i class="uil uil-file-alt nav-icon"></i> Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">
                    <i class="uil uil-briefcase-alt nav-icon"></i> Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#portfolio">
                    <i class="uil uil-scenery nav-icon"></i> Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    <i class="uil uil-message nav-icon"></i> Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default header
