import 'assets/styles/_homePage.scss';

import IndexNavbar from 'components/IndexNavbar';
import SectionAbout from 'components/SectionAbout';
import SectionEvent from 'components/SectionEvent';
import TitleBrand from 'components/TitleBrand';
import $ from 'jquery';
import { debounce } from 'lodash';
import React, { createElement, useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';

export default function HomePage() {
  const Sections = {
    About: SectionAbout,
    Events: SectionEvent
  };

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
