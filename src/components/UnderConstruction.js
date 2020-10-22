import React from 'react';

import 'assets/css/UnderConstruction.css';
import { ReactComponent as Gear } from 'assets/images/gear.svg';

export default function UnderConstruction() {
  return (
    <>
      <div className="warning-content">
        <h1>New Site Under Construction</h1>
        <Gear />
        <p>
          Please forgive the inconvenience. <br />
          We are currently initializing our brand new site.
        </p>
        <p>It's okay, we're excited too!</p>
      </div>
    </>
  );
}
