import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant={'dark'} expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand to="/">Pro Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link to="/cart"><i className={'fas fa-shopping-cart'}></i>Cart</Nav.Link>
                            <Nav.Link to="/login"><i className={'fas fa-user'}></i>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default Header;
