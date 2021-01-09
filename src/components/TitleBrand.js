import 'assets/styles/_titleBrand.scss';

import $ from 'jquery';
import debounce from 'lodash/debounce';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Link from 'react-scroll/modules/components/Link';
import { Waypoint } from 'react-waypoint';
import useWindowDimensions from 'utils/WindowDimensions';

export default function TitleBrand() {
  const el = useRef();
  const { height, width } = useWindowDimensions();

  useLayoutEffect(() => {
    if (el.current.scrollHeight <= height) el.current.classList.add('vh-100');
    else el.current.classList.remove('vh-100');
  });

  const handleNavbarOnEnter = () => {
    $('.navbar').addClass('navbar-dark bg-transparent');
    $('.navbar').removeClass('navbar-light bg-light');
  };
  const handleNavbarOnLeave = () => {
    $('.navbar').removeClass('navbar-dark bg-transparent');
    $('.navbar').addClass('navbar-light bg-light');
  };

  const getTitlePositionFromTop = () =>
    [$('.title-brand h1').css('height'), $('.navbar').css('height')]
      .map(parseFloat)
      .reduce((a, b) => a + b, 0) - 16;

  const [TitlePositionFromTop, setTitlePositionFromTop] = useState(0);

  useEffect(() => {
    setTitlePositionFromTop(getTitlePositionFromTop());

    const handleResize = debounce(
      () => setTitlePositionFromTop(getTitlePositionFromTop()),
      200
    );

    $(window).on('resize', handleResize);

    return () => {
      $(window).off('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid className="bg title-brand" ref={el}>
      <Container fluid="lg" className="h-100">
        <Row className="align-items-center h-100">
          <Col lg={7}>
            <Jumbotron className="bg-transparent text-light text-center text-lg-left">
              <Waypoint
                onEnter={handleNavbarOnEnter}
                onLeave={handleNavbarOnLeave}
                topOffset={TitlePositionFromTop}
              >
                <h1 className="display-0 mt-4">IIIT Kota CodeBase</h1>
              </Waypoint>
              <h2 className="lead mt-4">
                The Free and Open Source Society of IIIT Kota
              </h2>
              <Link
                to="about"
                smooth
                duration={500}
                offset={width < 992 ? -78 : -66}
              >
                <Button
                  className="mt-5 mr-sm-3 rounded-0"
                  variant="outline-light-x"
                  size="lg"
                  id="btn-1"
                >
                  Discover More
                </Button>
              </Link>
              <br className="d-sm-none" />
              <Link
                to="contact"
                smooth
                duration={500}
                offset={width < 992 ? -78 : -66}
              >
                <Button
                  className="mt-3 mt-sm-5 ml-sm-3 rounded-0"
                  variant="outline-light-x"
                  size="lg"
                  id="btn-2"
                >
                  Join the Team
                </Button>
              </Link>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
