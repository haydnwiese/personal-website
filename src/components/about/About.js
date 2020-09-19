import React from "react";
import "./About.css";
import aboutImage from "../../resources/about/about.jpg";
import SubTitle from "../sub_title/SubTitle";
import { scrollToRef } from "../../utilities/ScrollToRef";
import SectionDivider from "../section_divider/SectionDivider";

import rbcLogo from "../../resources/about/rbc.png";
import telusLogo from "../../resources/about/telus.png";
import ebaseLogo from "../../resources/about/ebase.png";
import jaLogo from "../../resources/about/juniorachievement.png";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          id="about"
          className={window.innerHeight > 200 ? "about" : "aboutMobile"}
        >
          <div
            id="detailsContainer"
            className={
              window.innerHeight > 200
                ? "detailsContainer"
                : "detailsContainerMobile"
            }
          >
            <div id="aboutImageContainer">
              <img src={aboutImage} id="aboutImage" />
            </div>
            <div id="descriptionContainer">
              <div id="aboutName">About Me</div>
              <div className="experienceDivider" />
              <p style={{ marginTop: 20 }}>
                I am a 2B Systems Design Engineering student at the University
                of Waterloo and an aspiring software developer seeking
                internship opportunities for summer 2020.
              </p>
              <p>
                As outlined below, I bring with me experience with many
                languages and frameworks and have experience in workplace
                settings that required professionalism, strong communication
                skills and an exemplary work ethic. I look forward to
                interviewing with your company to further demonstrate my
                abilities and desire to be a valuable part of your team. I wish
                to continue to gain valuable knowledge and experience to
                facilitate my experiential learning.
              </p>
            </div>
          </div>
        </div>

        <SectionDivider />

        <div id="experience">
          {/* <div id='experienceTitle'>Experience</div> */}

          <SubTitle title="EXPERIENCE" />
          {/* <div id='experienceDividerContainer'>
                    <div id='experienceHeaderDivider'/>
                </div> */}
          <div className="experienceContainer">
            <div>
              <img src={ebaseLogo} id="ebaseLogo" className="companyLogo" />
              <div className="positionTitle">
                eBase Solutions Inc. - Software Developer
              </div>
              <div className="postionDates">May 2020 - August 2020</div>
            </div>
            <div>
              <p>
                • Developed a mobile app using React Native and Swift that
                provides tune analysis of musical instruments
              </p>
              <p>
                • Architected and implemented solution for B2B controlled
                substance ordering via AS2 (with DEA/pharma industry compliance)
              </p>
              <p>
                • Used Node.js to implement a series of x509 certificate and
                order validations
              </p>
              <p className="lastPoint">
                • Created a Java service leveraging Apache POI libraries to
                parse and split incoming Excel files for asynchronous processing
              </p>
            </div>
          </div>
          <div className="experienceContainer">
            <div>
              <img src={rbcLogo} id="rbcLogo" className="companyLogo" />
              <div className="positionTitle">RBC - Android Developer</div>
              <div className="postionDates">September 2019 - December 2019</div>
            </div>
            <div>
              <p>
                • Developed various features within the RBC Mobile Banking app
                in Java
              </p>
              <p>
                • Worked extensively with Android RecyclerViews, fragments and
                Retrofit
              </p>
              <p>
                • Delivered features at the pace of full-time employees in an
                agile environment
              </p>
              <p className="lastPoint">
                • Collaborated closely with business and design partners to
                iterate on requirements
              </p>
            </div>
          </div>

          <div className="experienceContainer">
            <div>
              <img src={telusLogo} id="telusLogo" className="companyLogo" />
              <div className="positionTitle">TELUS - Programmer Analyst</div>
              <div className="postionDates">January 2019 - April 2019</div>
            </div>
            <div>
              <p>
                • Integrated a React Native mobile application with Oracle
                Identity Manager for user authentication
              </p>
              <p>
                • Developed a Spring Boot application to serve as a REST API for
                the mobile application
              </p>
              <p>
                • Created a CI/CD pipeline using Docker and Jenkins to compile
                the native application source code and upload the APK to a cloud
                service for multidevice testing
              </p>
              <p>
                • Deployed the Spring Boot Application to a cloud container
                platform (RedHat OpenShift)
              </p>
              <p className="lastPoint">
                • Conducted research and development with multidevice testing
                using Appium
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
