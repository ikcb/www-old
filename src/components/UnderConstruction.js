import React, { useRef, useLayoutEffect } from 'react';
import useWindowDimensions from 'utils/WindowDimensions';

import { ReactComponent as Gear } from 'assets/images/gear.svg';

export default function UnderConstruction() {
  const el = useRef();
  const { height, width } = useWindowDimensions();

  useLayoutEffect(() => {
    if (el.current.scrollHeight <= height) el.current.classList.add('vh-100');
    else el.current.classList.remove('vh-100');
    if (el.current.scrollWidth <= width) el.current.classList.add('vw-100');
    else el.current.classList.remove('vw-100');
  });

  return (
    <div ref={el} className="jumbotron d-flex align-items-center m-0">
      <div className="container-fluid text-center">
        <h1 className="h1 font-weight-light pb-4 mb-4">
          New Site Under Construction
        </h1>
        <Gear style={{ transform: 'scale(1.28)' }} />
        <p className="lead pt-4 mt-4">
          Please forgive the inconvenience. <br />
          We are currently initializing our brand new site.
        </p>
        <p className="lead">It's okay, we're excited too!</p>
      </div>
    </div>
  );
}
