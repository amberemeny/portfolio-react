import React, { Component } from 'react'
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';


export default class HomeProjects extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

    render(){
      return(
        <>
          <h2 id="project-heading" data-aos='fade-right' data-aos-delay="0" data-aos-duration="1000">Featured Projects</h2>
          <div id="container">
            <div className="projects" data-aos='fade-down' data-aos-delay="500">
              <div className="overlay"></div>
              <a href="https://chopanddroptreelop.com">Chop and Drop Tree Lop Website</a>
            </div>
            <div className="projects" id="project-2" data-aos='fade-down' data-aos-delay="900">
              <div className="overlay"></div>
              <a href="https://github.com/amberemeny/marketplace_assignment">Plant Marketplace</a>
            </div>
            <div className="projects" id="project-3" data-aos='fade-down' data-aos-delay="1300">
              <div className="overlay"></div>
              <a href="https://github.com/amberemeny/terminal_assignment">Plant Sim Terminal App</a>
            </div>
          </div>
        </>
      )
    }
  }