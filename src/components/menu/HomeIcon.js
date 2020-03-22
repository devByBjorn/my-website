import React from 'react'
import { NavLink } from 'react-router-dom'
import homeCave from '../img/icons8-cave-48.png'

const HomeIcon = (props) => (
  <div className="home-icon img">
    <NavLink to="/">
      <img
        src={homeCave}
        alt="Icon of a cave, link to startpage"
      />
    </NavLink>
  </div>
)

export default HomeIcon