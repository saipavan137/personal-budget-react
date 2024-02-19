import React from 'react';
import './App.css';
import {
	BrowserRouter as Router ,
	Route,
  Routes
} from "react-router-dom";
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import Contact from './Contact/contact';
function App() {
  return (
      <Router>
        <Menu/>
        <Hero/>
        <div className='mainContainer'></div>
        <Routes>
            <Route path='/' element = {<HomePage/>} />
        </Routes>
        <Routes>
            <Route path='/about' element = {<AboutPage/>} />
        </Routes>
        <Routes>  
          <Route path='/login' element = {<Login/>} />
        </Routes>
        <Routes>  
          <Route path='/contact' element = {<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
