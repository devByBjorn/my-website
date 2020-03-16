import React from 'react'
import linkedin from '../img/linkedin.svg'
import gmail from '../img/gmail.svg'

const ContactPage = () => (
  <div className="container">
    <div className="contact-logos">
      <div className="img gmail">
        <ul>
          <li><a href="mailto:bjorn.carell@gmail.com"> <img src={gmail} alt="gmail logo, link to my gmail" /></a></li>
          <li><a href="mailto:bjorn.carell@gmail.com"></a>bjorn.carell@gmail.com</li>
        </ul>
      </div>
      <div className="img linkedin">
        <ul>
          <li><a href="mailto:bjorn.carell@gmail.com">  <img src={linkedin} alt="linkedin logo, link to my LinkedIn profile" /></a></li>
          <li><a href="mailto:bjorn.carell@gmail.com"></a>Björn Carell</li>
        </ul>
      </div>
    </div>
  </div>
)

export default ContactPage