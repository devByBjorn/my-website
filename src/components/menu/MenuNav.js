import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import MenuNavBtn from './MenuNavBtn'

const MenuNav = () => {
  const node = useRef()
  const [width, setWidth] = useState('0rem')
  const [textContent, setTextContent] = useState('Menu')

  const toggleOnButton = () => {
    if (width === '0rem') {
      setWidth('30rem')
      setTextContent('Close')
    } else {
      setWidth('0rem')
      setTextContent('Menu')
    }
  }

  const toggleOnOutside = (e) => {
    if (node.current.contains(e.target)) {
      return
    }
    setWidth('0rem')
    setTextContent('Menu')
  }

  useEffect(() => {
    document.addEventListener('mousedown', toggleOnOutside)

    return () => {
      document.removeEventListener('mousedown', toggleOnOutside)
    }
  }, [])



  return (
    <div ref={node}>
      <MenuNavBtn
        onClick={toggleOnButton}
        textContent={textContent}
      />
      <nav
        className='main-nav'
        style={{
          width: width,
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

export default MenuNav