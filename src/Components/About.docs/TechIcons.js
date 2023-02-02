import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiSpring, SiTypescript, SiHtml5, SiMongodb } from "react-icons/si";
import { DiAngularSimple, DiJavascript1, DiCss3 } from "react-icons/di";
import { FaJava, FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";





export default function TechIcons() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaJava />
                <p className="tech-icons-text" >Java 8</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpring />
                <p className="tech-icons-text" >Spring</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
                <p className="tech-icons-text" >Javascript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaReact />
                <p className="tech-icons-text" >React</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAngularSimple />
                <p className="tech-icons-text" >Angular</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
                <p className="tech-icons-text" >Typescript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <AiOutlineConsoleSql />
                <p className="tech-icons-text" >SQL</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiMongodb />
                <p className="tech-icons-text" >MongoDB</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
                <p className="tech-icons-text" >HTML</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
                <p className="tech-icons-text" >CSS</p>
            </Col>


        </Row>
    )

}