import React from 'react'
import linkedin from '../img/linkedinsplashbig.svg'
import gmail from '../img/gmailcloudbig.svg'

const ContactPage = () => (
  <div className="container">
    <div className="contact-container">
      <div className="contact-logos">

        <div className="img gmail">
          <ul>
            <li><a href="mailto:bjorn.carell@gmail.com"> <img src={gmail} alt="gmail logo, link to my gmail" /></a></li>
            <li>bjorn.carell@gmail.com</li>
          </ul>
        </div>

        <div className="img linkedin">
          <ul>
            <li><a href="https://www.linkedin.com/in/bjorn-carell/" target="_blank"><img src={linkedin} alt="linkedin logo, link to my LinkedIn profile" /></a></li>
            <li>Björn Carell</li>
          </ul>
        </div>
      </div>
      <div className="credit">
        <span>Both Icons made by Icons8.</span>
        <span>Visit their<a href="https://icons8.com/"> site </a>for great icons.</span>
      </div>
    </div>

  </div>
)

export default ContactPage