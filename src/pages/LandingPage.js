import "../styles/landingPageStyles.css";
import React from 'react';
import { animated, Spring } from 'react-spring';
import resume from '../images/NicholasKnapton.pdf';

function LandingPage() {
    return (
    <Spring
      config={{ duration:2500 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >{props => (
      <animated.div style={props}>
        <h2 className="landingPageHeader">Nicholas Knapton</h2>
        <h3 className="landingPageSubHeader">
          A
          <span style={{ color: `rgb(0, 203, 253)` }}>
            &#00;&#60;SoftwareEngineering /&#62;&#00;
          </span>
          Student
        </h3>
        <div className="introContainer">
          <i class="material-icons" id="atIcon">
            place
          </i>
          <h3 className="landingPageSubHeader" id="school">
            University of Calgary
          </h3>
        </div>

        <p className="landingPageDescription">
        Hey! Im currently a student at the University of Calgary, studying Software Engineering and taking a minor in Biomedical Engineering. 
        I have a passion for learning new technologies, and excell in group and solo settings. I was raised in Whistler BC, and enjoy Mountain 
        Biking in my free time. If you have made it this far feel free to contact me whenever! Currently I am looking for 2021 Summer Internships 
        as I am still in university, however I am open to other oportunities.
        </p>
        <a target="_blank" href={resume}>
          <h3 className="landingPageSubHeader" id="resume">
            Resume
          </h3>
        </a>
      </animated.div>
    )}</Spring>
    );
}

export default LandingPage;
