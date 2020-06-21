import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MenuNav from '../components/menu/MenuNav'
import AboutPage from '../components/pages/AboutPage'
import ContactPage from '../components/pages/ContactPage'
import IndexPage from '../components/pages/IndexPage'
import PortfolioPage from '../components/pages/PortfolioPage'
import Page404 from '../components/pages/Page404'
import MobileTopBackground from '../components/menu/MobileTopBackground'

const AppRouter = () => (
  <BrowserRouter>

    <div>
      <MobileTopBackground />
      <MenuNav />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        {/*<Route path="/about" component={AboutPage} />*/}
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
