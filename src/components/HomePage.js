import IndexNavbar from 'components/IndexNavbar';
import SectionAbout from 'components/SectionAbout';
import TitleBrand from 'components/TitleBrand';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <IndexNavbar />
      <TitleBrand />
      <SectionAbout />
    </>
  );
}
