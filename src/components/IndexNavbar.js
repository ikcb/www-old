import { ReactComponent as Logo } from 'assets/images/logo.svg';
import 'assets/styles/_indexNavbar.scss';
import $ from 'jquery';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function HomePage() {
  const [navbarBrandWidth, setNavbarBrandWidth] = useState(0);

  useEffect(() => {
    const handleNavbarTranslateOnResize = () =>
      setNavbarBrandWidth(
        document
          .getElementsByClassName('navbar-brand')[0]
          .getBoundingClientRect().right + 32
      );

    const handleClickOutsideNav = e => {
      if (
        $('#responsive-navbar-nav').hasClass('show') &&
        !$(e.target).hasClass('navbar-toggler')
      )
        $('button.navbar-toggler').trigger('click');
    };

    const handleResize = debounce(() => {
      handleNavbarTranslateOnResize();
    }, 200);

    handleNavbarTranslateOnResize();
    $(document).on('click', handleClickOutsideNav);
    $(window).on('resize', handleResize);

    return () => {
      $(document).off('click', handleClickOutsideNav);
      $(window).off('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style>
        {`@media (max-width: 991.98px) {.nav-open .navbar-translate {transform: translateX(-${navbarBrandWidth}px)} .navbar-collapse {width: ${
          navbarBrandWidth + 16
        }px}}`}
      </style>

      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        bg="transparent"
        variant="dark"
        onSelect={() => document.documentElement.classList.remove('nav-open')}
      >
        <Container className="mt-lg-5 mt-3">
          <div className="navbar-translate">
            <Navbar.Brand href="/">
              <Logo className="mr-3 nav-logo" /> IIIT Kota
              <br className="d-lg-none" /> CodeBase
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() =>
                document.documentElement.classList.toggle('nav-open')
              }
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end acrylic"
          >
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#members">Members</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
