import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = legacy_createStore(
  function (state, payload) {
    switch (payload.type) {
      case 'CHANGE_NAME':
        return { ...state, name: payload.name };
      default:
        return state;
    }
  },
  { name: 'store_yq' }
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
