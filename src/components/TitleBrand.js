import 'assets/styles/_titleBrand.scss';

import $ from 'jquery';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';

export default function TitleBrand() {
  const handleNavbarOnEnter = () => {
    $('.navbar').addClass('navbar-dark bg-transparent');
    $('.navbar').removeClass('navbar-light bg-light');
  };
  const handleNavbarOnLeave = () => {
    $('.navbar').removeClass('navbar-dark bg-transparent');
    $('.navbar').addClass('navbar-light bg-light');
  };

  const getTitlePositionFromTop = () => {
    return (
      [$('.title-brand h1').css('height'), $('.navbar').css('height')]
        .map(parseFloat)
        .reduce((a, b) => a + b, 0) - 16
    );
  };

  const [TitlePositionFromTop, setTitlePositionFromTop] = useState(0);

  useEffect(() => {
    setTitlePositionFromTop(getTitlePositionFromTop());

    const handleResize = debounce(
      () => setTitlePositionFromTop(getTitlePositionFromTop()),
      300
    );

    $(window).on('resize', handleResize);

    return () => {
      $(window).off('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid className="bg title-brand vh-100">
      <Row className="align-items-center h-100">
        <Col>
          <Jumbotron className="bg-transparent text-light text-center">
            <Waypoint
              onEnter={handleNavbarOnEnter}
              onLeave={handleNavbarOnLeave}
              topOffset={TitlePositionFromTop}
            >
              <h1 className="display-0">IIIT Kota CodeBase</h1>
            </Waypoint>
            <h2 className="lead mt-4">
              The Free and Open Source Society of IIIT Kota
            </h2>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
