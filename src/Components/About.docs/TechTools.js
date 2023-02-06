import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiMysql, SiVisualstudiocode } from "react-icons/si";
import { DiEclipse } from "react-icons/di";

export default function TechTools() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
                <p className="tech-icons-text" >Postman</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
                <p className="tech-icons-text" >Workbench</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
                <p className="tech-icons-text" >Visual Studio Code</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiEclipse />
                <p className="tech-icons-text" >Eclipse IDE</p>
            </Col>
        </Row>
    )

}