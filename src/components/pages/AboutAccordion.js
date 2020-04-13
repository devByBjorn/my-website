import React, { useState, useRef } from 'react'
import Chevron from './AboutAccordionChevron'
import { Paragraph } from '../tags/Tags'


const AboutAccordion = (props) => {
  const [isActive, setIsActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotateIcon, setRotateIcon] = useState('icon');

  const content = useRef(null);

  const toggleAccordion = () => {
    setIsActive(isActive === '' ? 'active' : '')
    setHeight(
      isActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateIcon(
      isActive === 'active' ? 'icon' : 'icon rotate'
    )
  }

  return (
    <div className='accordion-section'>
      <button className={`accordion ${isActive}`} onClick={toggleAccordion}>
        <h3
          className='sub-heading'>{props.heading}
          <Chevron
            className={`${rotateIcon} chevron`}
            width={7}
            fill={'#ff8e0f'} />
        </h3>
      </button>
      <div
        className='content'
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        <div>
          {props.content.map((pContent) =>
            <Paragraph
              className="p"
              text={pContent}
              key={props.heading} />)}
        </div>

      </div>
    </div>
  );
}


export default AboutAccordion