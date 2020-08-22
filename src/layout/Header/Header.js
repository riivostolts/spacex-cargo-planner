import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { loadAllShipments, loadShipmentDetails } from '../../actions/';
import Filter from '../../components/Filter';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { id: selectedShipmentId } = state.shipments.selectedShipment;

  const handleLoad = () => {
    dispatch(loadAllShipments());
    // This is for overriding the cargo boxes value for the selected shipment
    dispatch(loadShipmentDetails(selectedShipmentId));
  }

  // Saves the state to session storage
  const handleSave = () => {
    sessionStorage.setItem('cargoPlannerState', JSON.stringify(state));
  }

  return (
    <div className="header">
      <div className="header__brand"><NavLink to="/">Cargo Planner</NavLink></div>
      <Filter />
      <div className="header__actions">
        <Button onClick={handleLoad} content="Load" primary/>
        <Button onClick={handleSave} content="Save" positive/>
      </div>
    </div>
  )
};

export default Header;
