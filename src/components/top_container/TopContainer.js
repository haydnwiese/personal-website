import React from 'react';
import './TopContainer.css';

import background from '../../resources/background.jpg'
import arrow from './down-arrow.svg';

import {scrollToRef} from '../../utilities/ScrollToRef';
import pdf from '../../resources/Haydn Wiese - Resume.pdf';
import ContactBar from '../contact_bar/ContactBar';
import Particles from 'react-particles-js';

class TopContainer extends React.Component {
    render() {
        let classes = {
            imageId: 'headerImage',
            titleId: 'title',
            subTitleId: 'subTitle',
            buttonId: 'learnMoreButton'
        };

        if (window.innerWidth > 450) {
            return(
                <div id='home' className="top-container">
                    {/* <img id={classes.imageId} src={background} /> */}
                    <Particles 
                        className='particles'
                        params={{
                            "particles": {
                                "number": {
                                    "value": 150
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} 
                    />
                    <ContactBar />
                    <div className={classes.titleId}>HAYDN WIESE</div>
                    <div className={classes.subTitleId}>Systems Design Engineering Student</div>
                    <div id='headerButtonContainer'>
                        <button className={classes.buttonId} onClick={() => scrollToRef('about')}>Learn More</button>
                        <button className={classes.buttonId} onClick={() => scrollToRef('projects')}>My Projects</button>
                        <button className={classes.buttonId} onClick={() => window.open(pdf, '_blank')}>Resume</button>
                    </div>
                    <img id='arrow' src={arrow} onClick={() => scrollToRef('about')}/>
                </div>
            );
        } else {
            return(
                <div id='home' className="top-container">
                    <img id={classes.imageId} src={background} />
                    <ContactBar />
                    <div className={classes.titleId}>HAYDN WIESE</div>
                    <div className={classes.subTitleId}>Systems Design Engineering Student</div>
                    <div id='headerButtonContainer'>
                        <button className={classes.buttonId} onClick={() => scrollToRef('about')}>LEARN MORE</button>
                        <button className={classes.buttonId} onClick={() => scrollToRef('projects')}>MY PROJECTS</button>
                        <button className={classes.buttonId} onClick={() => window.open(pdf, '_blank')}>RESUME</button>
                    </div>
                    <img id='arrow' src={arrow} onClick={() => scrollToRef('about')}/>
                </div>
            );
        }
    }
}

export default TopContainer;