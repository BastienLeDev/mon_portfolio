import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Accueil2() {
    return (
        <Container fluid className="about-section">
            <Row style={{
                marginTop: "100px"
            }}>
                <h1> <span className="blue">Présentation</span></h1>
            </Row>
            <Row style={{
                marginTop: "20px"

            }}>
                <p >Intéréssé par le dévloppement applicatif depuis l'adolescence, je me suis récemment reconverti dans cette branche
                    en tant que développeur Full-stack. </p>
                <p>
                    En effet, j'ai pu réaliser une formation de développeur Full-stack notament sur du Java et du TypeScript.
                </p>
                <p>Je suis intérésser par le développement Web mais je suis également ouvert au développement des applications mobiles et de bureau.</p>
            </Row>
            <Row style={{
                marginTop: "70px"
            }}>
                <Col md={5} className="accueil-about-social">
                    <h1> <span className="blue">Contacte</span></h1>
                    <p>
                        Vous pouvez me <span className="blue">contacter </span> via :
                    </p>
                    <ul className="accueil-about-social-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/BastienLeDev"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/bastien-gauthiero-90a20b202/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>


    )
}