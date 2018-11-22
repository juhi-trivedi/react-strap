import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigate.css'

class Navigate extends Component {
    render() {
        return (               
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <Link to="/">React-Bootstrap</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/About" to="/About">About Us</NavItem>                        
                        <NavItem eventKey={3} componentClass={Link} href="/Services" to="/Services">Services</NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/Contact" to="/Contact">Contact</NavItem>
                    </Nav>
                </Navbar>
        );
    }
}

export default Navigate;