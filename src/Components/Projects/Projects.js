import React from 'react';
import './Projects.css';
import SubTitle from '../SubTitle/SubTitle';
import ProjectTile from '../ProjectTile/ProjectTile'

import reactLogo from './react.png';
import appScreenshot1 from './coopScreenshot1.png';
import appScreenshot2 from './coopScreenshot2.png';
import appScreenshot3 from './coopScreenshot3.png';
import websiteScreenshot from './websitePreview.png';
import websiteScreenshot2 from './websitePreview2.png';
import appGif1 from './appBasicFunc.gif';

const Projects = () => (
    <div id='projects'>
        <SubTitle title='PROJECTS' />
        <div className='projectsContainer'>
            {/* <div className='projectTile'>
                <div className='projectTitle'>Co-op Budgeting App</div>
                <div className='projectToolContainer'>
                    <img className='projectToolLogo' src={reactLogo} />
                    <div className='projectTool'>React Native</div>
                </div>
                <div className='previewContainer'>
                    <img className='appPreviewScreenshots' src={appScreenshot1} />
                    <img className='appPreviewScreenshots' src={appScreenshot2} />
                </div>
                <div className='expandPrompt'>Click to Expand</div>
            </div> */}
            <ProjectTile 
                projectTitle='Co-op Budgeting App' 
                projectTool='React Native' 
                layout='row'
                description1='A mobile application written using React Native that allows co-op students to budget according to their earnings for an
                    co-op term. The user is able to set a savings goal, input their recurring expenses, and enter miscillaneous purchases throughout 
                    the term. The user is shown weekly spending targets to meet their savings goal, as well as a breakdown of their purchases by 
                    category.'
                description2='Google Firebase was utilized to store user data.'
            >
                <img className='appPreviewScreenshots' src={appGif1} />
                <img className='appPreviewScreenshots' src={appScreenshot2} />
            </ProjectTile>
            {/* <ProjectTile 
                projectTitle='Personal Website' 
                projectTool='React' 
                layout='column'
                description1='A single-page web app created using React to share things about me, my previous experiences, as well as to showcase my 
                projects'
                description2='The React app is deployed to Google Cloud App Engine'
            >
                <img className='webPreviewScreenshots' src={websiteScreenshot} />
                <img className='webPreviewScreenshots' src={websiteScreenshot2} />
            </ProjectTile> */}
        </div>
    </div>
);

export default Projects;