import logo from './logo.svg';
import './App.css';
import HeaderPage from './components/HeaderPage';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Potfolio from './components/Potfolio';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <div style={{ position: 'fixed', zIndex: 0, width: '100%', }}><HeaderPage /></div>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Projects' element={<Projects />}></Route>

          </Routes>
        </div>
      </BrowserRouter> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Potfolio/>}></Route>
 
      </Routes>
      </BrowserRouter> */}
      <Potfolio/>
    </div>
    // <div className="App">

    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
