import React from 'react';
import { Route } from 'react-router-dom';
import ShipmentDetail from '../../components/ShipmentDetail';
import './Main.scss';

const Main = ({ showSidebar }) => {
  return (
    <div className={`main ${ showSidebar ? 'main--hide' : '' }`}>
      <Route path="/company/:id" component={ShipmentDetail} />
    </div>
  )
}

export default Main;
