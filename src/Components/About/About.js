import React from 'react';
import './About.css';
import aboutImage from '../../about.jpg';
import SubTitle from '../SubTitle/SubTitle';
import {scrollToRef} from '../ScrollToRef';
import pdf from '../../Resume.pdf';
import SectionDivider from '../SectionDivider/SectionDivider';

import telusLogo from './telus.png';
import ebaseLogo from './ebase.png';
import jaLogo from './juniorachievement.png';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <div id='about' className={window.innerHeight > 200 ? 'about' : 'aboutMobile'}>
                <div id='detailsContainer' className={window.innerHeight > 200 ? 'detailsContainer' : 'detailsContainerMobile'}>
                    <div id='aboutImageContainer'>
                        <img src={aboutImage} id='aboutImage'/>
                    </div>
                    <div id='descriptionContainer'>
                        <div id='aboutName'>About Me</div>
                        <div className='experienceDivider' />
                        <p style={{marginTop: 20}}>
                            I am currently in my 1B term at the University of Waterloo studying Systems Design Engineering and am seeking an internship for fall 2019.  I hope to put forth my previous accomplishments and current learning in a manner that allows me to continue listening, learning and adapting to your specific company needs and values and thus become a contributing member of your team.
                        </p>
                        <p>
                            As outlined below, I bring with me experience with many programming languages and frameworks and have experience in a workplace settings that required professionalism, strong communication skills and an exemplary work ethic.  
                            I look forward to interviewing with your company to further demonstrate my abilities and desire to be a valuable part of your team and continue to gain valuable knowledge and experience to facilitate my experiential learning.
                        </p>
                    </div>
                </div>
            </div>

            <SectionDivider />
            
            <div id='experience'>
                {/* <div id='experienceTitle'>Experience</div> */}
                
                <SubTitle title='EXPERIENCE' />
                {/* <div id='experienceDividerContainer'>
                    <div id='experienceHeaderDivider'/>
                </div> */}
                <div className='experienceContainer'>
                    <div>
                        <img src={telusLogo} id='telusLogo'/>
                        <div className='positionTitle'>TELUS - Programmer Analyst</div>
                        <div className='postionDates'>Jan 2019 - April 2019</div>
                    </div>
                    <div>
                        <p>
                            • Integrated a React Native mobile application with Oracle Identity
                            Manager for user authentication
                        </p>
                        <p>
                            • Developed a Spring Boot application to serve as a REST API for the
                            mobile application
                        </p>
                        <p>
                            • Created a CI/CD pipeline using Docker and Jenkins to compile the
                            native application source code and upload the APK to a cloud service
                            for multidevice testing
                        </p>
                        <p>
                            • Deployed the Spring Boot Application to a cloud container platform
                            (RedHat OpenShift)
                        </p>
                        <p className='lastPoint'>
                            • Conducted research and development with multidevice testing using
                            Appium
                        </p>
                    </div>
                </div>
                <div className='experienceDivider'/>
                <div className='experienceContainer'>
                    <div>
                        <img src={ebaseLogo} id='ebaseLogo'/>
                        <div className='positionTitle'>eBase Solutions Inc. - Systems Analyst</div>
                        <div className='postionDates'>June 2018 - August 2018</div>
                    </div>
                    <div>
                        <p>
                            • Completed enhancements to a web-based price catalogue application, leveraging skills in JavaScript, HTML and VBA
                        </p>
                        <p>
                            • Met with client representatives to document requirements and establish a plan with an agreed delivery schedule
                        </p>
                        <p>
                            • Conducted research for technical integration via EDI with Canada Border Services
                        </p>
                        <p className='lastPoint'> 
                            • Daily system monitoring of client SAP landscape to ensure availability and general health of systems
                        </p>
                    </div>
                </div>
                <div className='experienceDivider'/>
                <div className='experienceContainer'>
                    <div>
                        <img src={jaLogo} id='jaLogo'/>
                        <div className='positionTitle'>Junior Achievement Company Program</div>
                        <div className='postionDates'>October 2014 - April 2016</div>
                    </div>
                    <div>
                        <p>
                            • Formed Sweet Solutions, an operation designed to simplify baking through the convenient packaging of ingredients                                
                        </p>
                        <p>
                            • Created Ozone, a company with the goal of producing eco-friendly iPhone cases. Through a focus on the use of
                            recycled materials and donation of a portion of our proceeds, we were able to contribute to environmental
                            sustainability                                
                        </p>
                        <p>
                            • Experience in project management obtained through assisting in the supervision of the iterative design process
                        </p>
                        <p className='lastPoint'>
                            • Program hosted at The Weather Network head office, with mentorship from industry professionals
                        </p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default About;