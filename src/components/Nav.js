import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/js/dist/dropdown';

const Navigation = () => {
    <>
        <Navbar collapseOnSelect fixed='top' bg='light purple'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Navbar.Link href='/'>Home</Navbar.Link>
                        <Navbar.Link href='/'>About</Navbar.Link>
                        <Navbar.Link href='/'>Projects</Navbar.Link>
                        <Navbar.Link href='/'>Contact</Navbar.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
    </>
}



export default Navigation;