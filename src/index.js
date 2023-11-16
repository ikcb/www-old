import 'assets/styles/_index.scss';

import HomePage from 'components/HomePage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);
