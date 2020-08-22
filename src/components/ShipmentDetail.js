import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { loadShipmentDetails } from '../actions';
import CargoBoxes from './CargoBoxes';

const ShipmentDetail = (props) => {
  const { name, email, boxes } = useSelector(state => state.shipments.selectedShipment);
  const { shipments } = useSelector(state => state.shipments);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = props.match.params;

  const redirectToHome = () => {
    if (shipments.length === 0) {
      history.push('/');
    }
  }

  useEffect(redirectToHome, []);

  const fetchShipmentDetails = () => {
    dispatch(loadShipmentDetails(id));
  };

  useEffect(fetchShipmentDetails, [ id ]);

  return (
    <div className="shipment">
      <h2 className="shipment__name">{name}</h2>
      <a className="shipment__email" href={`mailto:${email}`}>{email}</a>
      { name && <CargoBoxes boxes={boxes} shipmentId={id} /> }
    </div>
  )
}

export default ShipmentDetail;
