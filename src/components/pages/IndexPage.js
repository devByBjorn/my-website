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

          <div className="greeting-item">
            <h2><span className="hi">Hi</span>, I'm Björn. I'm a <span className="profession">developer</span>, finance geek and fitness enthusiast.</h2>
          </div>
        </div>

        <div className="short-bio">
          <p className="p">I’m continuously learning how to build and style stuff for the web; mainly using
          <span className="stand-out-word-2"> JavaScript </span>with
          <span className="stand-out-word-2"> React</span>, and
          <span className="stand-out-word-2"> CSS</span>,
          <span className="stand-out-word-2"> Sass</span> or
            <span className="stand-out-word-2"> Styled Components </span>for styling.
          Sometimes I dip my toe into the backend as well.
          If you're interested; check out my <NavLink to="/portfolio" className="stand-out-word">portfolio</NavLink>,
          or go directly to my <a href="https://github.com/devByBjorn" target="blank"><span className="stand-out-word">GitHub</span></a> page.</p>

          <p className="p">Like to come in contact? Don't
        hesitate to send me an <a href="mailto:devbybjorn@gmail.com"><span className="stand-out-word">email</span></a>.</p>
        </div>
      </main>
    </div>
  </div>
)

export default IndexPage

/*

<Img
            className="clipArt-item"
            src={clipArt}
            alt="clipArt of a cute bear"
          />
*/