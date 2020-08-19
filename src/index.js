import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/'
import App from './App';
import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const persistedState = sessionStorage.getItem('cargoPlannerState') ? JSON.parse(sessionStorage.getItem('cargoPlannerState')) : {};

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
