import React, { Component }  from "react";

import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Login from './login.component'
import SignUp from './signup.component'
import UserDetails from './userDetails'
import Steam from './Steam'
import Policyprivacy from './privacypolicy'

export default class NavbarComp extends Component{
        render(){
      return (
        <BrowserRouter>
        <div>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>
                <Link className="nav-link" to={'/steam'}>
                    Steam
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link" to={'/sign-in'}>Login</Link>
                <Link className="nav-link" to={'/sign-up'}>Register</Link>
                <NavDropdown title="Social media" id="basic-nav-dropdown">
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
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/steam" element={<Steam />} />
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