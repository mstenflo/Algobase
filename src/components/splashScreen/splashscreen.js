import React, { Component } from 'react'
import Jumbotron from '../jumbotron/jumbotron';

export class Splashscreen extends Component {
  render() {
    return (
      <div className='section splash'>
        <Jumbotron />
      </div>
    )
  }
}

export default Splashscreen