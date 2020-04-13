import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuNavBtn from './MenuNavBtn'

class MenuNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '0rem',
      textContent: 'Menu',
    }
  }

  toggleMenu = () => {
    let width = this.state.width
    width === '0rem'
      ? this.setState(() => ({ width: '30rem', textContent: 'Close', }))
      : this.setState(() => ({ width: '0rem', textContent: 'Menu', }))
  }
  render() {
    return (
      <div>
        <MenuNavBtn
          onClick={this.toggleMenu}
          textContent={this.state.textContent}
        />
        <nav className='main-nav'
          style={{
            width: this.state.width,
          }}
        >

          <ul>
            <li>
              <NavLink exact to="/" activeClassName="current"
                className="nav-link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="current"
                className="nav-link">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="current"
                className="nav-link">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="current"
                className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default MenuNav