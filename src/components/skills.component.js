import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'


export default class Skills extends Component {

    render(){
      return(
        <>
            <h2 id="project-heading" >Skills and Tech Stack</h2>
            <CardDeck id="projectCards">
                <Accordion>
                    <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Planning/Design
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <ListGroup variant="flush">
                            <ListGroup.Item>Jira Software</ListGroup.Item>
                            <ListGroup.Item>Confluence</ListGroup.Item>
                            <ListGroup.Item>Trello</ListGroup.Item>
                            <ListGroup.Item>Figma</ListGroup.Item>
                            <ListGroup.Item>Canva</ListGroup.Item>
                            <ListGroup.Item>Photoshop</ListGroup.Item>
                            <ListGroup.Item>Draw.io</ListGroup.Item>
                            <ListGroup.Item>LucidChart</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                            Development
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                        <ListGroup variant="flush">
                            <ListGroup.Item>Visual Studio Code</ListGroup.Item>
                            <ListGroup.Item>Github</ListGroup.Item>
                            <ListGroup.Item>React.js</ListGroup.Item>
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>HTML5/CSS</ListGroup.Item>
                            <ListGroup.Item>SCSS/SASS</ListGroup.Item>
                            <ListGroup.Item>Ruby on Rails</ListGroup.Item>
                            <ListGroup.Item>Ruby</ListGroup.Item>
                            <ListGroup.Item>Cypress</ListGroup.Item>
                            <ListGroup.Item>RSpec</ListGroup.Item>
                            <ListGroup.Item>MongoDB</ListGroup.Item>
                            <ListGroup.Item>PostgresQL</ListGroup.Item>
                            <ListGroup.Item>AWS S3</ListGroup.Item>
                            <ListGroup.Item>Markdown</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                <Accordion>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                            Other
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <ListGroup variant="flush">
                        <ListGroup.Item>Google Firebase</ListGroup.Item>
                        <ListGroup.Item>Heroku</ListGroup.Item>
                        <ListGroup.Item>AWS S3</ListGroup.Item>
                        <ListGroup.Item>Markdown</ListGroup.Item>
                        <ListGroup.Item>TDD/ODD</ListGroup.Item>
                    </ListGroup>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            </CardDeck>
        </>
      )
    }
  }