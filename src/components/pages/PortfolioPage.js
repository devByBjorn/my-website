import React from 'react'
import { ProjectComponent } from './PortfolioPageItem'
import projectOne from '../img/guess-the-capital.jpg'
import projectTwo from '../img/pricing-component.jpg'
import projectThree from '../img/the_pfqt.jpg'
import projectFour from '../img/markets-in-time.jpg'
import projectFive from '../img/edge-pusher.jpg'
import projectSix from '../img/where-in-the-world.jpg'
import HomeIcon from '../menu/HomeIcon'

const PortfolioPage = ({ location }) => (
  <div>
    <HomeIcon
      pagePath={location.pathname}
    />
    <div className="container">
      <ProjectComponent
        src={projectSix}
        heading="Where In the World?"
        techHeading="Technologies"
        techContent="React | Styled Components | Webpack | Babel | REST"
        aboutHeading="About"
        aboutContent="Challenge from frontendmentor.io, where the idea is to mimic real workflow. I was given a description of what functionality the app should have and a set design to follow when styling. Learned a lot working with a REST API, got a hang of Styled Components and how to create a dark/light switch with Hooks. (The initial load of the page can be slow due to how the heroku server works, please be patient)"
        projectUrl="https://search-world.herokuapp.com/"
        repoUrl="https://github.com/devByBjorn/where-in-the-world"
      />
      <ProjectComponent
        src={projectFive}
        heading="EdgePusher (beta)"
        techHeading="Technologies"
        techContent="React | Sass | Styled Components | Webpack | Babel | Firebase"
        aboutHeading="About"
        aboutContent="EdgePusher lets you log all your trades and delivers relevant statistics that helps you identify where your true edge in the market lies. I learned alot of React here, how to handle state with Redux and also how to work with a firebase database. (The initial load of the page can be slow due to how the heroku server works, please be patient)"
        projectUrl="http://www.edgepusher.com/"
        repoUrl="https://github.com/devByBjorn/The-Risk-Reward-app"
      />
      <ProjectComponent
        src={projectFour}
        heading="Markets in Time"
        techHeading="Technologies"
        techContent="HTML | CSS | JavaScript | Webpack | Babel"
        aboutHeading="About"
        aboutContent="A website focused on delivering an easy overview of time, market hours and opening info of various stock markets around the world. Got a real good understanding of wirking with time in JavaScript with the third pary library moment.js"
        projectUrl="https://www.marketsintime.com/"
        repoUrl="https://github.com/devByBjorn/markets_time"
      />
      <ProjectComponent
        src={projectThree}
        heading="The Pulp Fiction Quote Tribute"
        techHeading="Technologies"
        techContent="HTML | Sass | JavaScript | Webpack | Babel"
        aboutHeading="About"
        aboutContent="A website tribute to the movie Pulp Fiction. Generates quotes from the film and lets you save your favorites. If you feel creative you can write, save and edit your own quotes as well. First app I made with real interactivity, letting the user create and save their own data(qoutes) with the help of local storage."
        projectUrl="https://sharp-engelbart-11818a.netlify.com/"
        repoUrl="https://github.com/devByBjorn/the_PFQT"
      />
      <ProjectComponent
        src={projectTwo}
        heading="Price Packages"
        techHeading="Technologies"
        techContent="HTML | Sass | JavaScript | Webpack | Babel"
        aboutHeading="About"
        aboutContent="HTML and CSS challenge from frontendmentor.io where the idea is to mimic real workflow. I was given a description of what functionality the app should have and a set design to follow when styling. Forst project I did using CSS preprocesser Sass"
        projectUrl="https://xenodochial-bartik-7585b3.netlify.com"
        repoUrl="https://github.com/devByBjorn/price_component"
      />
      <ProjectComponent
        src={projectOne}
        heading="Guess the Capital"
        techHeading="Technologies"
        techContent="HTML | CSS | JavaScript"
        aboutHeading="About"
        aboutContent="The classic Hangman game made into a geographical based guessing game; the user gets to guess capitals around the world. Here I got to dig deep into async fetching, promises and working with a REST API."
        projectUrl="https://romantic-elion-2f9c7c.netlify.com/"
        repoUrl="https://github.com/devByBjorn/Guess_the_capital"
      />
    </div>
  </div>
)



export default PortfolioPage