import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <Container>
                <Row>
                    <Col className={'text-center py-3'}>Copyright &copy; {year} Tamer Mansour</Col>
                </Row>
            </Container>
        </>
    );

}

export default Footer;