import React from 'react'
import Social from './Social'
import Data from './Data'
import profile from './Assets/profile.jpg'
import Header from './header'
import Scrolldown from './Scrolldown'

const Home = () => {
  return (
    <section
      className="home"
      id="home"
      data-aos="fade-up"
      data-aos-duration="4000"
    >
      <Header />
      <div className="container">
        <div className="row ">
          <div className="social col-xs-6 col-sm-6 col-lg-4 ">
            <Social />
          </div>
          <div className="profile col-xs-6 col-sm-6 col-lg-4 ">
            <img src={profile} alt="" srcset="" className="home-img" />
          </div>
          <div className="data col-xs-12 col-sm-12 col-lg-4 ">
            <Data />
          </div>
        </div>
        <div className="row mt-4">
          <Scrolldown />
        </div>
      </div>
    </section>
  )
}

export default Home
