import React, { Component } from 'react'

import Navigation from "../components/navigation.component"
import Footer from "../components/footer.component"
import Header from "../components/header.component"
import Projects from "../components/homeprojects.component"
import ProjectsAccordian from "../components/projectsaccordian.component"

export default class Home extends Component {

    render(){
      return(
        <>
            <Navigation />
            <Header />
            <Projects />
            <ProjectsAccordian />
            <Footer />
        </>
      )
    }
  }