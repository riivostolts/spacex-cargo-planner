import React from 'react';
import { Route } from 'react-router-dom';
import ShipmentDetail from '../../components/ShipmentDetail';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Route path="/company/:id" component={ShipmentDetail} />
    </div>
  )
}

export default Main;
