import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './layout/Header/Header';
import Sidebar from './layout/Sidebar/Sidebar';
import Main from './layout/Main/Main';
import { loadAllShipments } from './actions'

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem('cargoPlannerState')) {
      const { shipments } = JSON.parse(sessionStorage.getItem('cargoPlannerState')).shipments;
      dispatch(loadAllShipments(shipments));
    }
  }, [])

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
