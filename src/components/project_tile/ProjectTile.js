import React from 'react';

import './ProjectTile.css'

import reactLogo from '../../resources/projects/react.png';
import appScreenshot1 from '../../resources/projects/coopScreenshot1.png';
import appScreenshot2 from '../../resources/projects/coopScreenshot2.png';

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

        if (!this.state.active) {
            return(
                <div className={className} onClick={() => this.state.active ? this.setState({active: false}) : this.setState({active: true})}>
                    <div className='projectTitle'>{this.props.projectTitle}</div>
                    <div className='projectToolContainer'>
                        <img className='projectToolLogo' src={reactLogo} />
                        <div className='projectTool'>{this.props.projectTool}</div>
                    </div>
                    <div className={`previewContainer ${this.props.layout}`}>
                        {this.props.children}
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
                        <img className='projectToolLogo' src={reactLogo} />
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