import React from 'react'

export const MenuNavBtn = ({ onClick, textContent }) => (
  <div>
    <button className="nav-menu-btn btn"
      onClick={onClick}
    >{textContent}</button>
  </div>
)

export default MenuNavBtn