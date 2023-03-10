import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjetsCards";
import projet1 from "../../Images/projet1.png";
import projet2 from "../../Images/projet2.png";

function Projects() {
    return (
        <Container>
            <Row style={{
                textAlign: "center",
                justifyContent: "center",
                paddingTop: "100px",
                paddingBottom: "20px"
            }}>
                <h1 style={{ paddingBottom: "20px" }} className="project-heading">
                    Mes <strong className="blue"> projets </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Ci-dessous, vous trouverez les projets (communs et individuels) sur lesquels j'ai travaillés :
                </p>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={projet1}
                        isBlog={false}
                        title="SportSocial"
                        description="SportSocial est une application Web réalisée en groupe dans le but de regrouper les pratiquants de sports afin qu'ils participent à des évènements sportifs. SportSocial a une dimension réseau Social afin que les utilisateurs puissent communiquer entre eux. La base de données du projet est en SQl, le Back est en Java 8 avec le framework Spring et le front est en Typescript avec le framework Angular, HTML/CSS."
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={projet2}
                        isBlog={false}
                        title="Portfolio"
                        description="Le portfolio sur lequel vous êtes actuellement est un projet personnel qui visait à me faire découvrir React."
                    />
                </Col>
            </Row>
        </Container>

    );
}

export default Projects;