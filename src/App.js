import './App.css';
import logo from './logo.png';
import ValidParentheses from './components/algorythms/ValidParentheses';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img alt='logo' src={logo} className='logo' /> Algobase</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#algorithms">Algorithms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://martin.stenflo.org">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="jumbotron text-center">
      <div class="container">
        <h1 class="display-4">Welcome to Algobase</h1>
        <p class="lead">Just a collection of my algorithms</p>
        <a class="btn btn-primary btn-lg" href="#challenges" role="button"><img src={logo} alt="logo" class="logo" /></a>
      </div>
    </header>
    </>
  );
}

export default App;
