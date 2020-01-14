import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export default class Navigation extends Component {

    render(){
      return(
        <Navbar id="header-nav" variant="dark" expand="sm">
        {/* <Navbar.Brand href="/">Brand Name</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Navbar.Text>
                        <Nav.Link href="https://github.com/amberemeny">
                          <img src={require('../assets/images/github(1).png')} alt="Github Icon" />
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/theivycoder">
                          <img src={require('../assets/images/network.png')} alt="Twitter Icon" />
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/amberemeny/">
                          <img src={require('../assets/images/linkedin(1).png')} alt="Linked In Icon" />
                        </Nav.Link>
                        <Nav.Link href="https://www.pinterest.com.au/aemeny0006/">
                          <img src={require('../assets/images/network(1).png')} alt="Pinterest Icon" />
                        </Nav.Link>
                    </Navbar.Text>
                    <div id="left">
                      <Nav.Link href="/">Home</Nav.Link>
                    </div>
                    <div id="left">
                      <Nav.Link href="/projects">Projects</Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      )
    }
  }