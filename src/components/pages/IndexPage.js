import React from 'react'
import clipArt from '../img/bear_clipArt_small.png'
import { Img } from '../tags/Tags'
import { NavLink } from 'react-router-dom'

const IndexPage = () => (

  <div className="container">
    <main className="main-index-content">
      <div className="clipArt-greeting-box">

        <Img
          className="clipArt-item"
          src={clipArt}
          alt="clipArt of a cute bear"
        />

        <div className="greeting-item">
          <h2><span className="hi">Hi</span>, I'm Björn. I'm a <span className="profession">Front-End Developer</span> fitness enthusiast & learner of things. </h2>
        </div>
      </div>

      <div className="short-bio">
        <p>I grew up in a small town just outside of Uppsala, Sweden. Currently I'm located in Stockholm (also Sweden). I'm learning to build and style stuff for the web. If you are intereseted; check out <NavLink to="/portfolio">my portfolio</NavLink>.</p>

        <p>If you like to come in contact with me, don't
        hesitate to send an <a href="mailto:devbybjorn@gmail.com">email</a>.</p>
      </div>
    </main>
  </div>
)

export default IndexPage