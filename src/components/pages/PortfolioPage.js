import React from 'react'
import { ProjectComponent } from './PortfolioPageItem'
import projectOne from '../img/guess-the-capital.png'
import projectTwo from '../img/pricing-component.PNG'
import projectThree from '../img/the_pfqt.PNG'
import projectFour from '../img/markets-in-time.png'

const PortfolioPage = () => (
  <div>

    <div className="container margin-top-4">
      <ProjectComponent
        src={projectFour}
        heading="Markets in Time"
        techHeading="Technologies"
        techContent="HTML | CSS | JavaScript | Webpack"
        aboutHeading="About"
        aboutContent="A website focused on delivering an easy overview of time, market hours and opening info of various stock markets around the world."
        projectUrl="https://www.marketsintime.com/"
        repoUrl="https://github.com/devByBjorn/markets_time"
      />
      <ProjectComponent
        src={projectThree}
        heading="The Pulp Fiction Qoute Tribute"
        techHeading="Technologies"
        techContent="HTML | Sass | JavaScript | Webpack"
        aboutHeading="About"
        aboutContent="A webiste tribute to the the movie Pulp Fiction. Generates qoutes from the film and let's you save your favorites. If you feel creative you can write, save and edit your own woutes as well"
        projectUrl="https://sharp-engelbart-11818a.netlify.com/"
        repoUrl="https://github.com/devByBjorn/the_PFQT"
      />
      <ProjectComponent
        src={projectTwo}
        heading="Price Packages"
        techHeading="Technologies"
        techContent="HTML | Sass | JavaScript | Webpack"
        aboutHeading="About"
        aboutContent="HTML and CSS challange from frontendmentor.io. I choosed to do the functionality with JavaScript and added a minor feature; darken the active subscription period on toggle."
        projectUrl="https://xenodochial-bartik-7585b3.netlify.com"
        repoUrl="https://github.com/devByBjorn/price_component"
      />
      <ProjectComponent
        src={projectOne}
        heading="Guess the Capital"
        techHeading="Technologies"
        techContent="HTML | CSS | JavaScript"
        aboutHeading="About"
        aboutContent="The classic Hangman game made into a geografical based guessing game, the user gets to guess capitals around the world"
        projectUrl="https://romantic-elion-2f9c7c.netlify.com/"
        repoUrl="https://github.com/devByBjorn/markets_time"
      />
    </div>
  </div>
)



export default PortfolioPage