import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron2 from "../components/Jumbotron2";
import SignUp from "../components/signup/form"
import SignIn from "../components/signin/signin"

export default function CompanyForm() {
    return (
        <Container fluid>
       <Row>
                 <Col size="md-6">
                    <Jumbotron2 >
                    <SignUp/>   
                    </Jumbotron2>
                </Col>
                <Col size="md-6">
                    <Jumbotron2 >
                        <SignIn/>
                    </Jumbotron2>
                </Col>
            </Row>
        </Container>
    );
}
