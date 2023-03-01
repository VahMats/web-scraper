import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Documents from '../pages/Documents';

const Router = () => (
  <Routes>
    <Route path="/documents" element={<Documents />} />
  </Routes>
);

export default Router;
