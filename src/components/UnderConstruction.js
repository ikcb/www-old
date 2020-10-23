import React from 'react';

import { ReactComponent as Gear } from 'assets/images/gear.svg';

export default function UnderConstruction() {
  return (
    <div className="jumbotron jumbotron-fluid d-flex align-items-center vh-100 p-0 m-0">
      <div className="container-fluid text-center">
        <h1 className="display-4 pb-4 mb-4">New Site Under Construction</h1>
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
