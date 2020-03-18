import React from 'react'


export const Img = (props) => (
  <div className={props.className}>
    <img
      src={props.src}
      alt={props.alt}
    />
  </div>
)


export const H3 = (props) => (
  <h3
    className={props.className}
  >{props.heading}</h3>
)

export const H4 = (props) => (
  <h4
    className={props.className}
  >{props.heading}</h4>
)

export const Paragraph = (props) => (
  <p
    className={props.className}
  >{props.text}</p>
)

export const A_Blank = (props) => (
  <div>
    <a href={props.href}
      target={props.blank}
      className={props.className}
    >{props.linkText}</a>
  </div>
)

