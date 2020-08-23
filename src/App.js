import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Header from './layout/Header/Header';
import Sidebar from './layout/Sidebar/Sidebar';
import Main from './layout/Main/Main';
import { loadAllShipments } from './actions';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const dispatch = useDispatch();
  const [ showSidebar, setShowSidebar ] = useState(false);

  const loadFromSaveStorage = () => {
    if (sessionStorage.getItem('cargoPlannerState')) {
      const { shipments } = JSON.parse(sessionStorage.getItem('cargoPlannerState')).shipments;
      dispatch(loadAllShipments(shipments));
    }
  };

  useEffect(loadFromSaveStorage, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__content">
          <Button onClick={() => setShowSidebar(!showSidebar)} className="show-shipments" type="button">Shipments</Button>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Main showSidebar={showSidebar} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
