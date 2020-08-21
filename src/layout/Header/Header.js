import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllShipments } from '../../actions/';
import Filter from '../../components/Filter';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleLoad = () => {
    dispatch(loadAllShipments());
  }

  // Saves the state to session storage
  const handleSave = () => {
    sessionStorage.setItem('cargoPlannerState', JSON.stringify(state));
  }

  return (
    <div className="header">
      <div className="header__brand">Cargo Planner</div>
      <Filter />
      <div className="header__actions">
        <Button onClick={handleLoad} content="Load" primary/>
        <Button onClick={handleSave} content="Save" secondary/>
      </div>
    </div>
  )
};

export default Header;
