import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import './index.css';

import { Store } from './reducers';
import { AppRouter } from './views/AppRouter';
import { AuthRouter } from './views/AuthRouter';
import reportWebVitals from './services/reportWebVitals';

// determines which stack to render
const AppContainer = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);

  if (isAuthenticated) return <AppRouter />;

  return <AuthRouter />;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// record app's performance
reportWebVitals();
