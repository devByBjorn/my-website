import React from 'react'
import { ProjectComponent } from './PortfolioPageItem'
import projectOne from '../img/guess-the-capital.jpg'
import projectTwo from '../img/pricing-component.jpg'
import projectThree from '../img/the_pfqt.jpg'
import projectFour from '../img/markets-in-time.jpg'
import projectFive from '../img/edgepusher.jpg'
import HomeIcon from '../menu/HomeIcon'

const PortfolioPage = ({ location }) => (
  <div>
    <HomeIcon
      pagePath={location.pathname}
    />
    <div className="container">
      <ProjectComponent
        src={projectFive}
        heading="EdgePusher"
        techHeading="Technologies"
        techContent="React | SCSS | Styled Components | Webpack | Babel | Firebase"
        aboutHeading="About"
        aboutContent="An application aimed to trades just starting out. EdgePusher lets you log all your trades and delivers relevant statistics that helps you identify where you true edge in the market lies."
        projectUrl="http://www.edgepusher.com/"
        repoUrl="https://github.com/devByBjorn/The-Risk-Reward-app"
      />
      <ProjectComponent
        src={projectFour}
        heading="Markets in Time"
        techHeading="Technologies"
        techContent="HTML | CSS | JavaScript | Webpack | Babel"
        aboutHeading="About"
        aboutContent="A website focused on delivering an easy overview of time, market hours and opening info of various stock markets around the world."
        projectUrl="https://www.marketsintime.com/"
        repoUrl="https://github.com/devByBjorn/markets_time"
      />
      <ProjectComponent
        src={projectThree}
        heading="The Pulp Fiction Qoute Tribute"
        techHeading="Technologies"
        techContent="HTML | Sass | JavaScript | Webpack | Babel"
        aboutHeading="About"
        aboutContent="A website tribute to the movie Pulp Fiction. Generates quotes from the film and lets you save your favorites. If you feel creative you can write, save and edit your own quotes as well."
        projectUrl="https://sharp-engelbart-11818a.netlify.com/"
        repoUrl="https://github.com/devByBjorn/the_PFQT"
      />
      <ProjectComponent
        src={projectTwo}
        heading="Price Packages"
        techHeading="Technologies"
        techContent="HTML | Sass | JavaScript | Webpack | Babel"
        aboutHeading="About"
        aboutContent="HTML and CSS challenge from frontendmentor.io. I chose to do the functionality with JavaScript and added a minor feature; darken the active subscription period on toggle."
        projectUrl="https://xenodochial-bartik-7585b3.netlify.com"
        repoUrl="https://github.com/devByBjorn/price_component"
      />
      <ProjectComponent
        src={projectOne}
        heading="Guess the Capital"
        techHeading="Technologies"
        techContent="HTML | CSS | JavaScript"
        aboutHeading="About"
        aboutContent="The classic Hangman game made into a geographical based guessing game; the user gets to guess capitals around the world"
        projectUrl="https://romantic-elion-2f9c7c.netlify.com/"
        repoUrl="https://github.com/devByBjorn/Guess_the_capital"
      />
    </div>
  </div>
)



export default PortfolioPage