import React from 'react'
import AboutAccordion from './AboutAccordion'
import {
  backstory,
  whyFrontEnd,
  whatIBring,
} from './AboutParagraphs'
import HomeIcon from '../menu/HomeIcon'

class AboutPage extends React.Component {
  state = {
    backstory: backstory,
    whyFrontEnd: whyFrontEnd,
    whatIBring: whatIBring,
  }

  render() {
    return (
      <div>
        <HomeIcon />
        <div className="container">
          <div className="accordion-container">
            <AboutAccordion
              heading='Backstory'
              content={this.state.backstory}
            />
            <AboutAccordion
              heading='Why Front-End?'
              content={this.state.whyFrontEnd}
            />
            <AboutAccordion
              heading='What I Bring to the Table'
              content={this.state.whatIBring}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage



