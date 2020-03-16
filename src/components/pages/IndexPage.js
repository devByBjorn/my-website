import React from 'react'
import clipArt from '../img/bear_clipArt_small.png'
import { Img } from '../tags/Tags'
import { NavLink } from 'react-router-dom'

const IndexPage = () => (

  <div className="container">
    <main className="main-index-content margin-top-4">
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
        <p>Lately I've taking on to learn the sweet since called boxing. Also, I'm continuously learning how to build and style stuff for the web. If you're interested; check out <NavLink to="/portfolio">my portfolio</NavLink>.</p>

        <p>If you like to come in contact with me, don't
        hesitate to send me an <a href="mailto:devbybjorn@gmail.com">email</a>.</p>
      </div>
    </main>
  </div>
)

export default IndexPage