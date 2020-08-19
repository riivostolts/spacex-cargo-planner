import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Sidebar from './layout/Sidebar/Sidebar';
import Main from './layout/Main/Main';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__content">
          <Sidebar />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
