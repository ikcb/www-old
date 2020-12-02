import 'assets/styles/_indexNavbar.scss';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import EventsNavLink from 'components/EventsSuspendedModal';
import $ from 'jquery';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import useWindowDimensions from 'utils/WindowDimensions';

export default function IndexNavbar() {
  const [navbarBrandWidth, setNavbarBrandWidth] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const handleNavbarTranslateOnResize = () =>
      setNavbarBrandWidth(
        [
          $('.navbar').css('padding-left'),
          $('.navbar .container').css('margin-left'),
          $('.navbar-brand').css('width'),
          $('.navbar-brand').css('margin-right')
        ]
          .map(parseFloat)
          .reduce((a, b) => a + b, 0) + 16
      );

    const handleClickOutsideNav = e => {
      if (
        $('#responsive-navbar-nav').hasClass('show') &&
        !$(e.target).hasClass('navbar-toggler')
      )
        $('button.navbar-toggler').trigger('click');
    };

    const handleResize = debounce(handleNavbarTranslateOnResize, 200);

    handleNavbarTranslateOnResize();
    $(document).on('click', handleClickOutsideNav);
    $(window).on('resize', handleResize);

    return () => {
      $(document).off('click', handleClickOutsideNav);
      $(window).off('resize', handleResize);
    };
  }, []);

  const handleLinkOnClick = () => {
    if ($('#responsive-navbar-nav').hasClass('show'))
      $('button.navbar-toggler').trigger('click');
  };

  const NavLink = props => (
    <li>
      <Link
        activeClass="active"
        to={props.name.split(' ')[0].toLowerCase()}
        smooth
        duration={500}
        className="nav-link"
        offset={width < 992 ? -78 : -66}
        id={`ref${props.name.split(' ')[0]}`}
        onClick={handleLinkOnClick}
        spy
      >
        {props.name}
      </Link>
    </li>
  );

  const handleNavbarOnSelect = () =>
    $(document.documentElement).removeClass('nav-open');
  const scrollToTop = () => scroll.scrollToTop({ duration: 500 });
  const toggleNavbar = () =>
    $(document.documentElement).toggleClass('nav-open');

  return (
    <>
      <style>
        {`@media (max-width:991.98px){.nav-open .navbar-translate{transform:translateX(${-navbarBrandWidth}px)}.navbar-collapse{width:${
          navbarBrandWidth + 16
        }px}}`}
      </style>

      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        bg="transparent"
        variant="dark"
        onSelect={handleNavbarOnSelect}
        className="pt-lg-4 pt-3 pb-3"
      >
        <Container className="mt-2">
          <div className="navbar-translate">
            <Navbar.Brand onClick={scrollToTop}>
              <Logo className="mr-3 nav-logo" /> IIIT Kota
              <br className="d-lg-none" /> CodeBase
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={toggleNavbar}
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
            <Nav as="ul">
              <NavLink name="About" />
              <EventsNavLink />
              <li>
                <a
                  href="https://github.com/iiitkota-codebase"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  onClick={e => $(e.target).trigger('blur')}
                >
                  Projects
                </a>
              </li>
              <NavLink name="Members" />
              <li>
                <a
                  href="https://medium.com/iiitkota-codebase"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                  onClick={e => $(e.target).trigger('blur')}
                >
                  Blog
                </a>
              </li>
              <NavLink name="Contact Us" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
