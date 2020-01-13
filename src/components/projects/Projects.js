import React from 'react';
import './Projects.css';
import SubTitle from '../sub_title/SubTitle';
import ProjectTile from '../project_tile/ProjectTile'

import reactLogo from '../../resources/projects/react.png';
import budgetAppScreenshot1 from '../../resources/projects/coopScreenshot1.png';
import budgetAppScreenshot2 from '../../resources/projects/coopScreenshot2.png';
import budgetAppScreenshot3 from '../../resources/projects/coopScreenshot3.png';
import websiteScreenshot from '../../resources/projects/websitePreview.png';
import websiteScreenshot2 from '../../resources/projects/websitePreview2.png';
import budgetAppGif1 from '../../resources/projects/appBasicFunc.gif';
import newNightResults from '../../resources/projects/newNightResultsScreen.png';
import newNightDetails1 from '../../resources/projects/newNightDetails1.png';
import newNightDetails2 from '../../resources/projects/newNightDetails2.png';
import mlbScreenshot1 from '../../resources/projects/mlbScreenshot1.png';
import mlbScreenshot2 from '../../resources/projects/mlbScreenshot2.png';

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
                <img className='appPreviewScreenshots' src={budgetAppScreenshot1} />
                <img className='appPreviewScreenshots' src={budgetAppScreenshot2} />
                <img className='appPreviewScreenshots' src={budgetAppScreenshot3} />
            </ProjectTile>
            <ProjectTile 
                projectTitle='New Night' 
                projectTool='Android (Java)' 
                layout='column'
                description1='A single-page web app created using React to share things about me, my previous experiences, as well as to showcase my 
                projects'
                description2='The React app is deployed to Google Cloud App Engine'
            >
                <img className='appPreviewScreenshots emulatorScreenshot' src={newNightResults} />
                <img className='appPreviewScreenshots emulatorScreenshot' src={newNightDetails1} />
                <img className='appPreviewScreenshots emulatorScreenshot' src={newNightDetails2} />
            </ProjectTile>
            <ProjectTile 
                projectTitle='GO Train Status Messenger' 
                projectTool='Node.js' 
                layout='column'
                description1='A single-page web app created using React to share things about me, my previous experiences, as well as to showcase my 
                projects'
                description2='The React app is deployed to Google Cloud App Engine'
            >
                <img className='webPreviewScreenshots' src={websiteScreenshot} />
                <img className='webPreviewScreenshots' src={websiteScreenshot2} />
            </ProjectTile>
        </div>
        <div className='projectsContainer'>
            <ProjectTile 
                projectTitle='Extended Places API' 
                projectTool='Spring Boot' 
                layout='column'
                description1='A single-page web app created using React to share things about me, my previous experiences, as well as to showcase my 
                projects'
                description2='The React app is deployed to Google Cloud App Engine'
            >
                <img className='webPreviewScreenshots' src={websiteScreenshot} />
                <img className='webPreviewScreenshots' src={websiteScreenshot2} />
            </ProjectTile>
            <ProjectTile 
                projectTitle='Foreign Receipt Scanner' 
                projectTool='React Native' 
                layout='column'
                description1='A single-page web app created using React to share things about me, my previous experiences, as well as to showcase my 
                projects'
                description2='The React app is deployed to Google Cloud App Engine'
            >
                <img className='webPreviewScreenshots' src={websiteScreenshot} />
                <img className='webPreviewScreenshots' src={websiteScreenshot2} />
            </ProjectTile>
            <ProjectTile 
                projectTitle='MLB Chrome Extension' 
                projectTool='React' 
                layout='column'
                description1='A single-page web app created using React to share things about me, my previous experiences, as well as to showcase my 
                projects'
                description2='The React app is deployed to Google Cloud App Engine'
            >
                <img className='appPreviewScreenshots' src={mlbScreenshot1} />
                <img className='appPreviewScreenshots' src={mlbScreenshot2} />
            </ProjectTile>
        </div>
    </div>
);

export default Projects;