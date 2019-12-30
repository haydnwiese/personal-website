import React, { Component } from 'react';
import './App.css';

import TopContainer from './components/top_container/TopContainer';
import About from './components/about/About';
import SectionDivider from './components/section_divider/SectionDivider';
import Projects from './components/projects/Projects';
import { SideBar } from './components/side_bar/SideBar';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

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