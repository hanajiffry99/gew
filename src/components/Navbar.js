import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import './Navbar.css'


function Navbar() {
    return (
        <>
            <Container fluid style={{ backgroundColor: 'rgb(0,115,207)', height: '150px', position: 'sticky-top', marginTop: '0.5rem' }}>
                <Row >
                    <Col xs lg="6">
                        <NavLink to='/' className='navbar-logo'>
                            <ImBooks style={{ width: '40px', height: '40px', marginRight: '1rem' }} />
                            <span className='header' >AlViN EDU-Master</span>
                        </NavLink>
                    </Col>
                    <Col xs lg='2.5'>
                        <Form inline style={{ marginTop: '25px' }}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="secondary">Search</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className='nav-items'>
                        <NavLink exact activeClassName="active" to='/' className='nav-links'>Home</NavLink>
                    </Col>
                    <Col className='nav-items'>
                        <NavLink activeClassName="active" to='/dashboard' className='nav-links'>Dashboard</NavLink>
                    </Col>
                    <Col className='nav-items'>
                        <NavLink activeClassName="active" to='/forum' className='nav-links'>Discussion</NavLink>
                    </Col>
                    <Col className='nav-items'>
                        <NavLink activeClassName="active" to='/contact' className='nav-links'>Contact us</NavLink>
                    </Col>
                    <Col >
                        <NavDropdown title={<span className="title">User</span>} id="collasible-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Grade</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Messages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Preferences</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.6">Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col>
                        <NavLink activeClassName="active" to='/signin'>
                            <button className='button'>Sign In</button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Navbar
