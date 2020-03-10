import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => (
  <div className="container">
    url does not exsist
    <Link to="/">Home</Link>
  </div>
)

export default Page404