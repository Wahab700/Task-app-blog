import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {

    return (
        <div>
            <Navbar expand="lg" className='main_navbar'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src='/images/Logo.png' alt='logo' className='header_logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar_links">
                            <Nav.Link href="#home" className='nav_items'>Home</Nav.Link>
                            <Nav.Link href="#about" className='nav_items'>About us</Nav.Link>
                            <Nav.Link href="/services" className='nav_items'>Services</Nav.Link>
                            <Nav.Link href="#blog" className='nav_items'>Blogs</Nav.Link>
                            <Nav.Link href="#contacts" className='nav_items'>Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
