import IndexNavbar from 'components/IndexNavbar';
import SectionAbout from 'components/SectionAbout';
import SectionEvent from 'components/SectionEvent';
import TitleBrand from 'components/TitleBrand';
import $ from 'jquery';
import React, { createElement, useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import useWindowDimensions from 'utils/WindowDimensions';

export default function HomePage() {
  const Sections = {
    About: SectionAbout,
    Events: SectionEvent
  };

  const { height } = useWindowDimensions();

  const scrollspyOnEnter = key => {
    if (key) {
      $(`#ref${key}`).addClass('active');
      $('.active').not(`#ref${key}`).removeClass('active');
    } else $('.active').removeClass('active');
  };

  const [ScrollspyOffset, setScrollspyOffset] = useState(0);

  useEffect(() => {
    setScrollspyOffset(height * 0.3);
    return () => {};
  }, [height]);

  return (
    <>
      <IndexNavbar />
      <Waypoint
        topOffset={-ScrollspyOffset}
        onEnter={() => scrollspyOnEnter()}
      />
      <TitleBrand />
      {Object.entries(Sections).map(([key, type]) => [
        <Waypoint
          key={`#waypnt${key}`}
          bottomOffset={ScrollspyOffset}
          onEnter={() => scrollspyOnEnter(key)}
          // debug
        />,
        createElement(type, { key: key, id: key.toLowerCase() })
      ])}
    </>
  );
}
