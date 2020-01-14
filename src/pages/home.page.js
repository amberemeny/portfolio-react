import React, { Component } from 'react'

import Navigation from "../components/navigation.component"
import Footer from "../components/footer.component"
import Header from "../components/header.component"
import AboutMe from "../components/aboutme.component"
import Skills from "../components/skills.component"

export default class Home extends Component {

    render(){
      return(
        <>
            <Navigation />
            <Header />
            <AboutMe />
            <Skills />
            <Footer />
        </>
      )
    }
  }