import React, {
  useState
} from 'react';

import {
  MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavItem, 
  MDBNavLink,
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBIcon
} from "mdbreact";

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Hobbies from './pages/hobbies';
import Footer from './footer';

import './css/App.css'; 

const App = () => {

  const[isOpen, setOpen] = useState(false);
  const[currentPage, setPage] = useState("/");

  const toggleCollapse = () => {
    setOpen(!isOpen);
  }

  const navClickHandler = () => {
    setPage(window.location.pathname);
    setOpen(false); // need to close the nav menu when link is clicked in mobile mode
  }  

  return (

    <div className='main-div'>

      <Router>
        <MDBNavbar color="indigo" dark expand="md" fixed="top">

          <MDBNavbarBrand>
            <strong className="white-text">Natsuki</strong>
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>

            <MDBNavbarNav left>

              <MDBNavItem active={currentPage === '/'} onClick={navClickHandler}>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem  active={currentPage === '/projects'} onClick={navClickHandler}>
                <MDBNavLink to="/projects">Projects</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem active={currentPage === '/hobbies'} onClick={navClickHandler}>
                <MDBNavLink to="/hobbies">Hobbies</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem active={currentPage === '/about'} onClick={navClickHandler}>
                <MDBNavLink to="/about">About</MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem>
                
                <a href='mailto:natsuki.hasegawa@gmail.com?subject=Contact'>
                  <MDBIcon icon="envelope" className="white-text"/>
                </a>

                <a href='https://www.linkedin.com/in/haseganats/'>
                  <MDBIcon fab icon="linkedin" className="white-text ml-3"/>
                </a>

                <a href='https://twitter.com/NatsukiNZ'>
                  <MDBIcon fab icon="twitter" className="white-text ml-3"/>
                </a>

                <a href='https://github.com/oosacker'>
                  <MDBIcon fab icon="github" className="white-text ml-3"/>
                </a>
                
              </MDBNavItem>
            </MDBNavbarNav>

          </MDBCollapse>
        </MDBNavbar>
        

        <Switch>

        <Route path="/about">
            <About />
          </Route>

          <Route path="/hobbies">
            <Hobbies />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>


      <Footer />
    </div>

  );
}

export default App;
