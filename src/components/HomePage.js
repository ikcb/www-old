import 'assets/styles/_homePage.scss';

import IndexNavbar from 'components/IndexNavbar';
import SectionAbout from 'components/SectionAbout';
import SectionEvent from 'components/SectionEvent';
import TitleBrand from 'components/TitleBrand';
import React, { createElement } from 'react';

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
