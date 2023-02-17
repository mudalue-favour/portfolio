import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container f-container">
          <h1 className="footer-title">M.uxor</h1>

          <ul className="footer-list">
            <li>
              <a href="#about" className="footer-links">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer-links">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="footer-links">
                Testimonials
              </a>
            </li>
          </ul>
          <div className="footer-socials">
            <a
              href="http://www.instagram.com"
              className="footer-social-link"
              target="_blank"
            >
              <i class="uil uil-instagram"></i>
            </a>

            <a
              href="http://www.twitter.com"
              className="footer-social-link"
              target="_blank"
            >
              <i class="uil uil-twitter"></i>
            </a>

            <a
              href="http://www.github.com"
              className="footer-social-link"
              target="_blank"
            >
              <i class="uil uil-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
