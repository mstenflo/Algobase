import React, { Component } from 'react'
import Jumbotron from '../jumbotron/jumbotron';

export class Splashscreen extends Component {
  render() {
    return (
      <div className='splash full-height'>
        <Jumbotron />
      </div>
    )
  }
}

export default Splashscreen