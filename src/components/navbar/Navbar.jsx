import React from 'react'
import CartWidget from '../cartwidget/CartWidget'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'


const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src="/Logo_color.png"
                            width="50" height="50"
                            alt="Logo" />
                        Cerámicas El Barro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="nav-link" href="/">Inicio</Nav.Link>
                            <Nav.Link className="nav-link"  href="#action2">Piezas Menaje</Nav.Link>
                            <Nav.Link className="nav-link" href="#action2">Piezas Decoración</Nav.Link>
                            <Nav.Link className="nav-link" href="#action2">Piezas Joyería</Nav.Link>
                            <Nav.Link className="nav-link" href="#action2">Herramientas</Nav.Link>
                            <Nav.Link className="nav-link" href="#action2">Esmaltes y Pigmentos</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button id='btn-buscar' variant="outline-success">Buscar</Button>
                        </Form>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>)
}


export default Menu