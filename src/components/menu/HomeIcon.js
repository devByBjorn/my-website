import React from 'react'
import { NavLink } from 'react-router-dom'
import homeCave from '../img/icons8-cave-48.png'
import CurrentPage from '../url-location/CurrentPage'

const HomeAndCurrentPage = (props) => (
  <div className="home-and-current-page">
    <div className="home-icon img">
      <NavLink
        to="/"
      >
        <img
          src={homeCave}
          alt="Icon of a cave, link to startpage"
        />
      </NavLink>
    </div>
    <CurrentPage
      className="current-page"
      pagePath={props.pagePath}
    />
  </div>
)

export default HomeAndCurrentPage