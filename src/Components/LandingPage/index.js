import "./LandingPage.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import FrontPageCards from "../FrontPageCards";

function LandingPage() {
  return (
    <div className='mainbody' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "95vh" }}>
      <Container>
        <Row className='justify-content-md-center'>
          <Col sm='4'>
            <FrontPageCards />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
