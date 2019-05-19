import React, { Component } from 'react';
import './App.css';

import TopContainer from './Components/TopContainer/TopContainer';
import About from './Components/About/About';
import SectionDivider from './Components/SectionDivider/SectionDivider';
import Projects from './Components/Projects/Projects';
import { SideBar } from './Components/SideBar/SideBar';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>        
        <div>
          <TopContainer />

          <Navbar />

          <About />

          <SectionDivider />

          <Projects />

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;