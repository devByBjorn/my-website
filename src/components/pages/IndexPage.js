import React from 'react'
import clipArt from '../img/bear_clipArt_small.png'
import { Img } from '../tags/Tags'
import { NavLink } from 'react-router-dom'
import NameLogo from '../menu/NameLogo'

const IndexPage = () => (
  <div>
    <NameLogo />
    <div className="container">
      <main className="main-index-content margin-top-8">
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
          <p className="p">Lately I've been learning the sweet since of boxing. Also, I'm continuously learning how to build and style stuff for the web. If you're interested; check out <NavLink to="/portfolio">my portfolio</NavLink>.</p>

          <p className="p">Like to come in contact? Don't
        hesitate to send me an <a href="mailto:devbybjorn@gmail.com">email</a>.</p>
        </div>
      </main>
    </div>
  </div>

)

export default IndexPage