import React from 'react'
import { Img, H3, H4, P, A_Blank, Paragraph, } from '../tags/Tags'

export const ProjectComponent = (props) => (
  <div>
    <div className="project-container">


      <div className="project-img">
        <Img src={props.src} />
      </div>
      <div className="project-content">
        <H3
          heading={props.heading}
          className="main-heading project"
        />

        <H4
          heading={props.techHeading}
          className="sub-heading tech"
        />

        <Paragraph
          paragraph={props.techContent}
          className="p"
        />

        <H4
          heading={props.aboutHeading}
          className="sub-heading about"
        />

        <Paragraph
          paragraph={props.aboutContent}
          className="p"
        />

        <div className="website-repo-links">
          <A_Blank
            href={props.projectUrl}
            blank={"_blank"}
            linkText="Website"
            className="Link-btn btn"
          />
          <A_Blank
            href={props.repoUrl}
            blank={"_blank"}
            linkText="GitHub"
            className="Link-btn btn"
          />
        </div>
      </div>
    </div>
  </div>
)
