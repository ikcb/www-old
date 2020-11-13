import 'assets/styles/_titleBrand.scss';

import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

export default function TitleBrand() {
  return (
    <Container fluid className="bg title-brand vh-100">
      <Row className="align-items-center h-100">
        <Col>
          <Jumbotron className="bg-transparent text-light text-center">
            <h1 className="display-0">IIIT Kota CodeBase</h1>
            <h2 className="lead mt-4">
              The Free and Open Source Society of IIIT Kota
            </h2>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
