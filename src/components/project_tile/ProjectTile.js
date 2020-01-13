import React from 'react';

import './ProjectTile.css'

import reactLogo from '../../resources/projects/react.png';
import appScreenshot1 from '../../resources/projects/coopScreenshot1.png';
import appScreenshot2 from '../../resources/projects/coopScreenshot2.png';
import androidLogo from '../../resources/projects/androidLogo.png';
import nodeLogo from '../../resources/projects/nodeLogo.png';

export default class ProjectTile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    }

    resetTile = () => {
        document.getElementsByClassName('projectTileActive')[0].scrollTop = 0;
        this.setState({active: false});
    }

    render() {
        let className;
        this.state.active ? className = 'projectTile projectTileActive' : className = 'projectTile';
        let toolIcon;
        switch (this.props.projectTool) {
            case 'React Native':
                toolIcon = reactLogo;
                break;
            case 'Android (Java)':
                toolIcon = androidLogo;
                break;
            case 'Node.js':
                toolIcon = nodeLogo;
                break;   
            default:
                toolIcon = reactLogo;        
        }

        if (!this.state.active) {
            return(
                <div className={className} onClick={() => this.state.active ? this.setState({active: false}) : this.setState({active: true})}>
                    <div className='projectTitle'>{this.props.projectTitle}</div>
                    <div className='projectToolContainer'>
                        <img className='projectToolLogo' src={toolIcon} />
                        <div className='projectTool'>{this.props.projectTool}</div>
                    </div>
                    <div className='promptContainer'>
                        <div className='expandPrompt'>{this.state.active ? 'Click to Collapse' : 'Click to Expand'}</div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className={className} onClick={() => this.state.active ? this.resetTile() : this.setState({active: true})}>
                    <div className='projectTitle'>{this.props.projectTitle}</div>
                    <div className='projectToolContainer'>
                        <img className='projectToolLogo' src={toolIcon} />
                        <div className='projectTool'>{this.props.projectTool}</div>
                    </div>
                    <div className={`previewContainer ${this.props.layout}`}>
                        {this.props.children}
                    </div>
                    <div className='descriptionContainer'>
                        <div className='descriptionTitle'>Description</div>
                        <p className='description'>{this.props.description1}</p>
                        <p className='description'>{this.props.description2}</p>
                    </div>
                    <div className='promptContainer'>
                        <div className={this.state.active ? 'expandPromptExpanded' : 'expandPrompt'}>{this.state.active ? 'Click to Collapse' : 'Click to Expand'}</div>
                    </div>
                </div>
            );
        }
    }
}