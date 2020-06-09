import React from 'react'
import { NavLink } from 'react-router-dom'
import homeCave from '../img/icons8-cave-48.png'
import CurrentPage from '../url-location/CurrentPage'

const HomeAndCurrentPage = ({ pagePath }) => (
  <div className="home-and-current-page">
    <CurrentPage
      className="current-page"
      pagePath={pagePath}
    />
  </div>
)

export default HomeAndCurrentPage