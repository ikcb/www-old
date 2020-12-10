import 'assets/styles/_homePage.scss';

import IndexNavbar from 'components/IndexNavbar';
import SectionAbout from 'components/SectionAbout';
import SectionContact from 'components/SectionContact';
import SectionMembers from 'components/SectionMembers';
import TitleBrand from 'components/TitleBrand';
import $ from 'jquery';
import { debounce } from 'lodash';
import React, { createElement, useEffect } from 'react';

export default function HomePage() {
  const Sections = {
    About: SectionAbout,
    Members: SectionMembers,
    Contact: SectionContact
  };

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    const handleResize = debounce(setViewportHeight, 200);
    $(window).on('resize', handleResize);

    return () => {
      $(window).off('resize', handleResize);
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <TitleBrand />
      {Object.entries(Sections).map(([key, type]) => (
        <section key={key} id={key.toLowerCase()}>
          {createElement(type)}
        </section>
      ))}
    </>
  );
}
