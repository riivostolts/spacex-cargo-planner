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

  const handleLoad = () => {
    dispatch(loadAllShipments());

    if (state.shipments.selectedShipment.id) {
      // This is for overriding the cargo boxes value for the selected shipment
      const { id: selectedShipmentId } = state.shipments.selectedShipment;
      dispatch(loadShipmentDetails(selectedShipmentId));
    }
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
