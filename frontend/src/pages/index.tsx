import React from 'react';
import { Provider } from 'react-redux';

import Layout from '../component/Layout';
import Router from '../router/Router';
import store from '../store/store';

const App = () => (
  <Provider store={store}>
    <Layout>
      <Router />
    </Layout>
  </Provider>
);

export default App;
