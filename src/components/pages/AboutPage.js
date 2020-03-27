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
          <div className="about-heading">
            <h2>If you like to get to know me a bit better, this is a great place to start. </h2>
          </div>
          <div className="underline" />
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

// const AboutPage = (props) => (
//   <div>
//     <div className="container">
//       <div className="accordion-container">
//         <AboutAccordion
//           heading='Backstory'
//           content={backstory}
//         />
//         <AboutAccordion
//           heading='Why Front-End?'
//           content={whyFrontEnd}
//         />
//         <AboutAccordion
//           heading='What I Bring to the Table'
//           content={[whatIBringOne, whatIBringTwo]}
//         />
//       </div>
//     </div>
//   </div>
// )


export default AboutPage



