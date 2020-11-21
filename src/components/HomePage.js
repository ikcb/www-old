import 'assets/styles/_homePage.scss';

import IndexNavbar from 'components/IndexNavbar';
import SectionAbout from 'components/SectionAbout';
import SectionEvent from 'components/SectionEvent';
import TitleBrand from 'components/TitleBrand';
import $ from 'jquery';
import React, { createElement, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useDebouncedEffect } from 'utils/DebouncedEffect';

export default function HomePage() {
  const Sections = {
    About: SectionAbout,
    Events: SectionEvent
  };

  const [stack, setStack] = useState([]);

  useDebouncedEffect(
    () => {
      if (stack.length) {
        let top = stack[stack.length - 1];

        $(`#ref${top}`).addClass('active');
        $('.active').not(`#ref${top}`).removeClass('active');
      } else $('.active').removeClass('active');

      return () => {};
    },
    200,
    [stack]
  );

  return (
    <>
      <IndexNavbar />
      <TitleBrand />
      {Object.entries(Sections).map(([key, type]) => (
        <Waypoint
          key={`#waypnt${key}`}
          onEnter={() => setStack([...stack, key])}
          onLeave={() => setStack(stack.slice(0, -1))}
          bottomOffset="50%"
        >
          <section id={key.toLowerCase()}>{createElement(type)}</section>
        </Waypoint>
      ))}
    </>
  );
}
