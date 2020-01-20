import React from 'react';
import './Projects.css';
import SubTitle from '../sub_title/SubTitle';
import ProjectTile from '../project_tile/ProjectTile'

import reactLogo from '../../resources/projects/react.png';
import budgetAppScreenshot1 from '../../resources/projects/budgeting_app/screenshot1.png';
import budgetAppScreenshot2 from '../../resources/projects/budgeting_app/screenshot2.png';
import budgetAppScreenshot3 from '../../resources/projects/budgeting_app/screenshot3.png';
import websiteScreenshot from '../../resources/projects/websitePreview.png';
import websiteScreenshot2 from '../../resources/projects/websitePreview2.png';
import newNightResults from '../../resources/projects/new_night/newNightResultsScreen.png';
import newNightDetails1 from '../../resources/projects/new_night/newNightDetails1.png';
import newNightDetails2 from '../../resources/projects/new_night/newNightDetails2.png';
import mlbScreenshot1 from '../../resources/projects/chrome_extension/mlbScreenshot1.png';
import mlbScreenshot2 from '../../resources/projects/chrome_extension/mlbScreenshot2.png';
import extendedPlacesScreenshot from '../../resources/projects/extended_places/swaggerScreenshot.png'

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
                projectTitle='StuBudget' 
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
                description1='An Android app to help users pick a venue for a night out in Toronto'
                description2='Utilizes the Google Places API in conjunction with my own custom API. The use of the custom API allows results to be filtered further by categories such as: Music Genre, Venue Size and Dress code'
            >
                <img className='appPreviewScreenshots' src={newNightResults} />
                <img className='appPreviewScreenshots' src={newNightDetails1} />
                <img className='appPreviewScreenshots' src={newNightDetails2} />
            </ProjectTile>
            <ProjectTile 
                projectTitle='GO Train Status Messenger' 
                projectTool='Node.js' 
                layout='column'
                containsImages={false}
                description1='A simple Node app that sends an SMS message at a specified time each weekday indicating the status of incoming trains.'
                description2='Accesses the GO Transit API for train statuses and the Twilio API to send SMS messages.'
            />
        </div>
        <div className='projectsContainer'>
            <ProjectTile 
                projectTitle='Extended Places API' 
                projectTool='Spring Boot' 
                layout='column'
                description1='A Spring Boot app to serve as a REST API for my "New Night" Android app.'
                containsImages={false}
                description2='Connects to a MySql database which stores additional details on places provided by the Google Places API. 
                The data is combined to offer a more refined selection to the user.'
            >
                {/* <img className='webPreviewScreenshots' src={extendedPlacesScreenshot} /> */}
            </ProjectTile>
            <ProjectTile 
                projectTitle='Foreign Receipt Scanner' 
                projectTool='React Native' 
                layout='column'
                containsImages={false}
                description1='A React Native app that allows users to convert values on receipts from one currency to another. '
                description2='When travelling, users can scan their receipts and select the currency, as well as the currency they wish to convert to. A list of converted values will then be presented. This app is currently in development'
            />
            <ProjectTile 
                projectTitle='MLB Chrome Extension' 
                projectTool='React' 
                layout='column'
                description1='A chrome extension that allows you to view the current MLB leaders for different batting categories.'
                description2='The extension accesses the open MLB API. It is built using React and Bootstrap.'
            >
                <img className='appPreviewScreenshots' src={mlbScreenshot1} />
                <img className='appPreviewScreenshots' src={mlbScreenshot2} />
            </ProjectTile>
        </div>
    </div>
);

export default Projects;