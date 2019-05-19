import React from 'react';
import './Navbar.css';
import {scrollToRef} from '../ScrollToRef';
import pdf from '../../Resume.pdf';

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
        // let hidden;
        // window.pageYOffset >= this.state.offsetTop ? hidden = false : hidden = true;

        // if (hidden && !this.state.hidden) {
        //     setTimeout(() => this.setState({hidden: true}), 500);
        // } else {
        //     this.setState({hidden});
        // }
        let className;
        window.pageYOffset >= this.state.offsetTop - 50? className = 'navbar navbarBlack' : className = 'navbar';
        this.setState({className});
        console.log(className);
    }

    render() {
        if (this.state.hidden) {
            return(
                <div />
            );
        } else {
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
}