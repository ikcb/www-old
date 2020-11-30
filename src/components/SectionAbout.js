import 'assets/styles/_sectionAbout.scss';

import { ReactComponent as Illustration } from 'assets/images/undraw_code_typing_7jnv.svg';
import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

export default function SectionAbout() {
  return (
    <Container className="section-about">
      <Row className="align-content-center">
        <Col lg={7}>
          <Jumbotron className="bg-transparent text-light m-0">
            <h1 className="display-0 text-center text-lg-left">About Us</h1>
            <p className="lead mt-5">
              IIIT Kota CodeBase is an organisation formed and run by the
              students of IIIT Kota with the purpose to promote the spirit of
              open source development and maintain good coding culture in the
              institute. <br /> We actively work together and collaborate to
              build awesome open source projects. In the course, we explore our
              technological interests and learn practical coding skills by
              sharing our knowledge and expertise.
            </p>
          </Jumbotron>
        </Col>
        <Col lg={5} className="d-none d-lg-block">
          <Illustration className="w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
}
