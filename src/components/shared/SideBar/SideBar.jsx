import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import IMAGES from '../../../assets/images/Images';

import './SideBar.scss';

const SideBar = () => {

    const offCanvasRef = useRef();
    const offsetValue = -56;

    const closeOffCanvas = (e) => {
        //e.preventDefault()
        offCanvasRef.current.backdrop.click()
    };

    return (
        <div className='sidebar-bx'>
            <Navbar collapseOnSelect expand='lg' className="">
                <Container fluid>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-lg'
                        aria-labelledby='offcanvasNavbarLabel-expand-lg'
                        placement="end"
                        ref={offCanvasRef}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className='user-img'>
                                <img src={IMAGES.userPic} alt='pic' />
                            </div>
                            <div className='user-info'>
                                <h3>Jackson Ford</h3>
                                <p><span>UI/UX/Designer</span> in Philippines</p>
                            </div>

                            <Nav className="justify-content-end flex-grow-1">
                                <NavLink  to=''><span onClick={closeOffCanvas}>home</span></NavLink>
                                <NavLink to='about' ><span onClick={closeOffCanvas}>about</span></NavLink>
                                <NavLink to='skills' ><span onClick={closeOffCanvas}>skills</span></NavLink>
                                <NavLink to='experience' ><span onClick={closeOffCanvas}>experience</span></NavLink>
                                <NavLink to='work' ><span onClick={closeOffCanvas}>work</span></NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to=''>home</NavLink>
                            <NavLink to='about'>about</NavLink>
                            <NavLink to='skills'>skills</NavLink>
                            <NavLink to='experience'>experience</NavLink>
                            <NavLink to='work'>work</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">Features</Nav.Link>
                            <Nav.Link href="">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
}

export default SideBar;
