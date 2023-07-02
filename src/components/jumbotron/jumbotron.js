import React, { Component } from 'react'

export class Jumbotron extends Component {
  render() {
    return (
      <header className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4 p-3">Welcome to Algobase</h1>
          <p className="lead p-3">Just a collection of my algorithms</p>
        </div>
      </header>
    )
  }
}

export default Jumbotron