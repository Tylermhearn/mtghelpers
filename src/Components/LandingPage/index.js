import "./LandingPage.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import LandingPageCards from "../LandingPageCards";

function LandingPage() {
  return (
    <div className='mainbody' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "95vh" }}>
      <Container>
        <Row className='justify-content-md-center'>
          <Col sm='4'>
            <LandingPageCards />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
