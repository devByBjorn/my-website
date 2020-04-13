import React from 'react'

const CurrentPage = ({ pagePath, className }) => {
  const trimedPagePath = pagePath.replace(/[/]+/g, '')
  const pathText = trimedPagePath.charAt(0).toUpperCase() + trimedPagePath.slice(1)

  return (
    <h3 className={className}>
      {pathText}</h3>
  )
}

export default CurrentPage