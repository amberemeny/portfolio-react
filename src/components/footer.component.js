import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default class Footer extends Component {

    render(){
      return(
        <Navbar id="footer" variant="dark">
            <Nav className="m-auto">
                <Navbar.Text>
                    &copy; Amber Emeny 2020
                </Navbar.Text>
            </Nav>
        </Navbar>
      )
    }
  }