import React from 'react'
import AboutAccordion from './AboutAccordion'
import ReactDOM from 'react-dom'
import Paragraph from '../tags/Tags'
import {
  backstory,
  whyFrontEnd,
  whatIBring,
} from './AboutParagraphs'

class AboutPage extends React.Component {
  state = {
    backstory: backstory,
    whyFrontEnd: whyFrontEnd,
    whatIBring: whatIBring,
  }

  render() {
    return (
      <div>
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



