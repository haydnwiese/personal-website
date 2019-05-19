import React from 'react';
import './TopContainer.css';
import background from '../../background.jpg'
import {scrollToRef} from '../ScrollToRef';
import pdf from '../../Resume.pdf'
import ContactBar from '../ContactBar/ContactBar';

class TopContainer extends React.Component {
    render() {
        let classes = window.innerHeight > 400 ? {
            imageId: 'headerImage',
            titleId: 'title',
            subTitleId: 'subTitle',
            buttonId: 'learnMoreButton'
        } : {
            imageId: 'headerImageMobile',
            titleId: 'titleMobile',
            subTitleId: 'subTitleMobile',
            buttonId: 'learnMoreButtonMobile'
        };
        
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
            </div>
        );
    }
}

export default TopContainer;