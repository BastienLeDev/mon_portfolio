import React from 'react';
import { Container, Col, Row } from "react-bootstrap"


const FieldWord = ({ onChange, disabled, onClick }) => {

    return (
        <Container>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <input className="form-control" type="text" maxLength="1" onChange={onChange} /><br /><br />
                </Col>
            </Row>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <button disabled={disabled} onClick={onClick} style={{ width: "420px" }} className="btn btn-primary">Valider</button>
                </Col>
            </Row>
        </Container >
    );
};

export default FieldWord;