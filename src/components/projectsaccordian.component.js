import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class Header extends Component {

    render(){
      return(
        <Accordion>
            <h2 id="project-heading" >All Projects</h2>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <img src={require('../assets/images/button.png')} alt="dropdown" />
                Chop and Drop Website - Static HTML/SCSS - Independent
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>I was approached by a small Brisbane business to develop a static website to act as their main point of contact for new clients.<br />
                I developed the website using just HTML and SCSS with the help of formsubmit.co to easily submit contact messages.<br />
                Upon completion, I was asked to add features to the website that would mean porting the content into a React.js application. I am currently in the process of developing a react version of the website. <br />
                <a href="https://github.com/amberemeny/chopanddroptreelop">Static Website Github</a> <br />
                <a href="https://github.com/amberemeny/chopanddrop-react">React Website Github</a>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                <img src={require('../assets/images/button.png')} alt="dropdown" />
                The Green Market - Ruby on Rails - Solo Assessment
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>The Green Market is a marketplace web application targeted at collectors and sellers of houseplants. It was created as assessment for Term 2 of Coder Academy's FastTrack Bootcamp Program. <br />
                The application allows for user sign-up, buying plants, selling plants, a functional cart, payment processing through Stripe and PostgresQL database integration.<br />
                <a href="https://github.com/amberemeny/marketplace_assignment">The Green Market Github</a>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                <img src={require('../assets/images/button.png')} alt="dropdown" />
                Plant Sim - Ruby CLI - Solo Assessment
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>The Plant Sim is a Ruby CLI simulation game that allows the user to look after a plant in a Tamagotchi-like fashion with the promise of growing a flower. This project was developed as assessment for Term 1 of Coder Academy's FastTrack Bootcamp Program.<br />
                <a href="https://github.com/amberemeny/terminal_assignment">The Plant Sim Github</a>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                <img src={require('../assets/images/button.png')} alt="dropdown" />
                Plantabase - Solo Side Project
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body>This passion project was developed with houseplant collectors in mind. It will provide a central web application to keep track of plants you own, want to own and how to look after them.<br />
                <a href="https://github.com/amberemeny/plantabase-second">Plantabase Github</a>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                <img src={require('../assets/images/button.png')} alt="dropdown" />
                D&D Character Manager - Side Project/Concept
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                <Card.Body>The D&D Character Manager is a concept that I have played with to learn Javascript and how to manipulate JSON data. I have experimented with manipulating arrays of character stats and calculated rolling dice for associated skills.<br />
                <a href="https://github.com/amberemeny/dnd-test">Character Manager Github</a>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
      )
    }
  }