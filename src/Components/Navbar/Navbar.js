import React from 'react';
import './Navbar.css';
import {scrollToRef} from '../ScrollToRef';
import pdf from '../../Resources/Haydn Wiese - Resume.pdf';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            offsetTop: null,
            hidden: false,
            className: 'navbar'
        };
    }

    componentDidMount() {
        this.setState({offsetTop: document.getElementById('about').offsetTop});
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll = () => {
        let className;
        window.pageYOffset >= this.state.offsetTop - 50? className = 'navbar navbarBlack' : className = 'navbar';
        this.setState({className});
    }

    render() {
        return(
            <div className={this.state.className}>
                <div id='buttonContainer'>
                    <button className='navButtons' onClick={() => scrollToRef('top')}>Home</button>
                    <button className='navButtons' onClick={() => scrollToRef('about')}>About</button>
                    <button className='navButtons' onClick={() => scrollToRef('projects')}>Projects</button>
                    <button className='navButtons' onClick={() => window.open(pdf, '_blank')}>Resume</button>
                </div>
            </div>
        );
    }
}