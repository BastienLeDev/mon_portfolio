import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import TechIcons from "./TechIcons";
import TechTools from "./TechTools";
import Particle from "../Particles";



export default function About() {
    return (

        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "100px",
                            paddingBottom: "50px",

                        }}
                    >
                        <h1>A propos de moi</h1>
                        <p> Je suis développeur <span className="blue"> full-stack </span> junior en reconvertion professionelle. Je suis diplômé en ingénierie Textile & Fibres.</p>
                        <p> Passioné du numérique, j'ai décider de me reconvertir dans le <span className="blue">développement applicatif </span> afin de développer mes compétences dans ce domaine.</p>
                        <p> En dehors de la programmation, j'aime : </p>
                        <ul>
                            <li><ImPointRight /> Faire du sport</li>
                            <li><ImPointRight /> Jouer aux jeux-vidéos</li>
                            <li><ImPointRight /> Lire</li>
                        </ul>
                    </Col>
                    <Row>
                        <h1> Mes <span className="blue"> compétences : </span></h1>
                    </Row>
                    <Row>
                        <TechIcons />
                    </Row>
                    <Row>
                        <h1> Les <span className="blue">outils</span> que j'utilise :</h1>
                        <TechTools />
                    </Row>
                </Row>
            </Container>
        </Container>

    );
}
