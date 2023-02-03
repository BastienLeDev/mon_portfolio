import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../Images/developer_male.png";
import img2 from "../../Images/Accueil2.png";
import Type from "./Type";
import Accueil2 from "./Accueil2";

export default function Accueil() {
    return (
        <section>
            <Container fluid className="about-section">
                <Row style={{
                    marginTop: "100px"
                }}>
                    <Col md={1}></Col>
                    <Col md={5} className="home-header"

                        style={{
                            justifyContent: "center",
                            paddingTop: "120px",
                            paddingBottom: "80px",
                            marginLeft: "",
                            textAlign: "justify"

                        }}>
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Bonjour,

                        </h1>
                        <h1 style={{ paddingBottom: 15 }}>
                            Bienvenue sur mon portfolio ! 🖖
                        </h1>
                        <h1 className="heading-name">
                            Je suis
                            <strong className="main-name"> Bastien GAUTHIERO</strong>
                        </h1>

                        <div style={{ padding: 50, textAlign: "left" }}>
                            <h2 className="blue"> <i><Type /></i></h2>
                        </div>
                    </Col>
                    <Col md={5}>
                        <img src={img}
                            className="img-fluid01"
                            style={{ maxHeight: "600px" }} />
                    </Col>
                </Row>
                <Container fluid >
                    <Row>

                        <Col md={1}>
                        </Col>
                        <Col md={4}>
                            <img src={img2}
                                className="img-fluid"
                                style={{ maxHeight: "500px" }} />
                        </Col>

                        <Col md={6}>
                            <Accueil2 />
                        </Col>
                    </Row>
                </Container>

            </Container>
        </section>



    )
}