import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-bootstrap';


const Footer = () => {
    return (
        <>
            <Container fluid className='main_footer'>
                <Container>
                    <div className='footer_main_wraper py-5'>
                        <Row>
                            <Col lg={6} sm={12} className='left-side'>
                                <h2 className="text-light w-75">Get in touch with us<br /> for your service</h2>
                                <div className="icon-box">
                                    <NavLink ><i className="fa fa-facebook" aria-hidden="true"></i></NavLink>
                                    <NavLink ><i className="fa fa-twitter" aria-hidden="true"></i></NavLink>
                                    <NavLink ><i className="fa fa-instagram" aria-hidden="true"></i></NavLink>
                                    <NavLink ><i className="fa fa-linkedin" aria-hidden="true"></i></NavLink>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} >
                                <div className="right-side">
                                    <label className="">Help line Number</label>
                                    <h5 className="tel">1800 265 24 52</h5>
                                    <label >Address</label>
                                    <h5 className="address">NH 234   Public Square San Francisco  65368</h5>
                                    <label>We are open</label>
                                    <h5 className="timming">Monday to Friday 9:00 AM to  10:00  AM</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Container fluid className='sub_footer'>
                <Container >
                    <div className='sub_footer_main_wraper pt-2 pb-2'>
                        <Row>
                            <Col lg={4} sm={12} className=' sub_footer_cols text-mobile-center'>
                                <img src='/images/fkigo.png' alt='logo' className='footer_logo' />
                            </Col>
                            <Col lg={4} sm={12} className='text-center sub_footer_cols'>
                                <div className='text-center'>
                                    <Nav className="footer_navbar">
                                        <Nav.Link href="#home" className='footer_nav_links'>Home</Nav.Link>
                                        <Nav.Link href="#about" className='footer_nav_links'>About us</Nav.Link>
                                        <Nav.Link href="#service" className='footer_nav_links'>Services</Nav.Link>
                                        <Nav.Link href="#blog" className='footer_nav_links'>Blogs</Nav.Link>
                                        <Nav.Link href="#contacts" className='footer_nav_links'>Contacts</Nav.Link>
                                    </Nav>
                                </div>
                            </Col>
                            <Col lg={4} sm={12} className='text-center sub_footer_cols'>
                                <div className='sub_footer_copyright'>@Copyright Finsweet 2021</div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>

        </>


    )
}

export default Footer