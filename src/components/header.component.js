import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default class Header extends Component {

    render(){
      return(
        <Jumbotron fluid>
            <Container>
                <div id="left">
                  <h2>The Ivy Coder</h2>
                  <h3>Full-Stack Developer</h3>
                </div>
                <div id="right">
                <h2>Amber Emeny</h2>
                <h3>Plant Lover</h3>
                </div>
            </Container>
        </Jumbotron>
      )
    }
  }