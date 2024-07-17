import React, { Component }  from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Home from './home'
import Login from './login.component'
import SignUp from './signup.component'
import UserDetails from './userDetails'
import Policyprivacy from './privacypolicy'

export default class NavbarComp extends Component{
        render(){
      return (
        <BrowserRouter>
        <div class="d-flex flex-column wrapper">
        <Navbar expand="lg" className="bg-body-tertiarynavbar navbar-dark bg-dark boder-bottom shadow-sm mb-3">
        <Container>
            <Navbar.Brand>
                <Link className="nav-link" to={'./'}>
                  HOME - Math High Speed
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav flex-grow-1">
                <Link className="nav-link" to={'/sign-in'}>Login</Link>
                <Link className="nav-link" to={'/sign-up'}>Register</Link>
                <Link className="nav-link" to={'https://store.steampowered.com/app/2589400/Math_High_Speed/'}>Steam</Link>

              <Navbar.Collapse className="justify-content-end">
                <NavDropdown className="nav-link text-warning" title="Social media" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.youtube.com/@CrimNatanael10">Youtube</NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/boaula.digital">
                    Facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.instagram.com/boaula.digital/">Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <Link className="nav-link" to={'/policy'}>
                    Policy Privacy
                </Link>
                </NavDropdown>
              </Navbar.Collapse>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/policy" element={<Policyprivacy/>} />
              <Route path="/userDetails" element={<UserDetails />} />
            </Routes>
          </div>
        </div>

        </div>
        </BrowserRouter>
      )

    }
}