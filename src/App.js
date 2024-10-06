import './App.css';
import Header from './Components/Header/Header';
import Extra from './Components/Extra/Extra';
import Companies from './Components/Companies/Companies';
import Residencies from './Components/Residencies/Residencies';
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer.js';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Components/About/About.js';

function App() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={
            <>
              <Header showHome={false} scrollToTop={true}/>
              <Extra />
              <Companies />
              <Residencies />
              <Value />
              <Contact />
              <GetStarted />
              <Footer />
            </>
          }/>
          <Route path="/about" element={
            <>
              <Header showHome={true} />            
              <About scrollToTop={true} />     
              <Footer />       
            </>  
            } 
           />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
