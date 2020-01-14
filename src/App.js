import React, { Component } from 'react'
import './stylesheets/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route} from 'react-router-dom'


import Home from './pages/home.page'
import Projects from './pages/projects.page'

export default class App extends Component {

  render(){
    return(
      <>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
          </div>
        </BrowserRouter>
      </>
    )
  }
}