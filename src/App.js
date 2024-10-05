import './App.css';
import Header from './Components/Header/Header';
import Extra from './Components/Extra/Extra';
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import { Accordion } from 'react-accessible-accordion';
import Value from "./Components/Value/Value"
import Contact from "./Components/Contact/Contact"
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Extra/>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
