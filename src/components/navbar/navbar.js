import React, { Component } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  navigateToAlgorithm = (algorithm) => {
    console.log(this.props);
  };
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo px-3" />
            Algobase
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end px-3" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" href="#algo" id="algorithmsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Algorithms
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="algorithmsDropdown">
                  <li><Link to='/' className="dropdown-item">Home</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" href="#validParentheses" to='validParentheses'>Valid Parentheses</Link></li>
                  <li><Link className="dropdown-item" href="#longestCommonPrefix" to='longestCommonPrefix'>Longest Common Prefix</Link></li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://martin.stenflo.org">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar