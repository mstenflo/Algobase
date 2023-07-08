import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './images/logo.png'
import Navbar from './components/navbar/navbar';
import Splashscreen from './components/splashScreen/splashscreen';
import ValidParentheses from './components/algorithms/ValidParentheses';
import LongestCommonPrefix from './components/algorithms/longestCommonPrefix';

function App() {
  return (
    <Router>
      <div className='section'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Splashscreen />} />
          <Route path='/validParentheses' element={<ValidParentheses />} />
          <Route path='/longestCommonPrefix' element={<LongestCommonPrefix />} />
        </Routes>
          <div className='bottom-logo'>
            <img src={logo} alt="Logo" className="bottom-logo" />
          </div>
      </div>
    </Router>
  );
}

export default App;
