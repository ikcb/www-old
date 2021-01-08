import 'assets/styles/_sectionAbout.scss';

import { ReactComponent as Illustration } from 'assets/images/undraw_code_typing_7jnv.svg';
import $ from 'jquery';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

export default function SectionAbout() {
  const [displayIllustration, setDisplayIllustration] = useState(true);

  useEffect(() => {
    const handleIllustration = () => {
      let state = true;
      if (window.innerWidth < 992)
        if (
          window.innerHeight > $('#about-col-1').height() &&
          $('#about-col-1').innerHeight() >
            window.innerHeight -
              (826.3 / 1088) * (window.innerWidth * 0.75) -
              78
        )
          state = false;

      if (state !== $('#about-col-2').is(':visible'))
        setDisplayIllustration(state);
    };

    handleIllustration();
    const handleResize = debounce(handleIllustration, 200);
    $(window).on('resize', handleResize);

    return () => {
      $(window).off('resize', handleResize);
    };
  }, []);

  return (
    <Container className="section-about">
      <Row className="align-content-center">
        <Col lg={7} id="about-col-1">
          <Jumbotron className="bg-transparent text-light m-0">
            <h1 className="display-0 text-center text-lg-left">About Us</h1>
            <p className="lead mt-5 w-lg-90">
              IIIT Kota CodeBase is a community formed by the students of IIIT
              Kota to promote open source development in the institute and
              hence, maintain a good coding culture. <br /> We, at CodeBase,
              explore our technical interests, and enhance our practical coding
              skills by actively working together to build awesome free and open
              source projects.
            </p>
          </Jumbotron>
        </Col>
        <Col
          lg={5}
          className={`text-center ${
            displayIllustration ? 'd-block' : 'd-none'
          }`}
          id="about-col-2"
        >
          <Illustration className="w-75 w-lg-100 h-100 pb-5 pb-lg-0" />
        </Col>
      </Row>
    </Container>
  );
}
