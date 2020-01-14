import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class ProjectsCarousel extends Component {

    render(){
      return(
        <>
            {/* <h1> Projects </h1> */}
            <Carousel>
                <Carousel.Item id="item1">
                    {/* <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/300"
                    alt="First slide"
                    /> */}
                    <Carousel.Caption>
                    <h3>Chop and Drop Tree Lop Website</h3>
                    <p>Freelance website work for a local business.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id="item2">
                    {/* <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/300"
                    alt="Third slide"
                    /> */}

                    <Carousel.Caption>
                    <h3>The Green Market - Plant Marketplace</h3>
                    <p>A Ruby-on-Rails marketplace web application for selling and buying plants.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id="item3">
                    {/* <img
                    className="d-block w-100"
                    src="https://picsum.photos/800/300"
                    alt="Third slide"
                    /> */}

                    <Carousel.Caption>
                    <h3>Plant Sim Terminal Game</h3>
                    <p>A game run from Ruby CLI. First assessment for Coder Academy Fast Track Program.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
      )
    }
  }