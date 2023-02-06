import React from 'react';
import { Container, Col, Row } from "react-bootstrap"

const PenduSchema = ({ currentTry }) => {
    const path = "src/../Images/Pendu/" + currentTry + ".png";
    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col>

                    <img style={{ paddingLeft: "50px", marginTop: "60px" }} src={path} alt="pendu" />

                </Col>
            </Row>
        </Container>
    );
};

export default PenduSchema;