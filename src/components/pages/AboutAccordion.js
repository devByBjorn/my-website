import React, { useState, useRef } from 'react'
import Chevron from './AboutAccordionChevron'
import { Paragraph } from '../tags/Tags'


const AboutAccordion = (props) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('icon');

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight + 10}px`
    );
    setRotateState(
      setActive === 'active' ? 'icon' : 'icon rotate'
    );
  }

  return (
    <div className='accordion-section'>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <h3
          className='sub-heading'>{props.heading}
          <Chevron
            className={`${setRotate} chevron`}
            width={7}
            fill={'#ff8e0f'} />
        </h3>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className='content'
      >
        <div>
          {props.content.map((pContent, i) => <Paragraph className="p" text={pContent} key={props.heading} />)}
        </div>

      </div>
    </div>
  );
}

// <div
//   className='p'
//   {props.}
//   content={props.content}
// dangerouslySetInnerHTML={{ __html: props.content }}
// />



export default AboutAccordion