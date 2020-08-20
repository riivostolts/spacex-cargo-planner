import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadShipmentDetails } from '../actions';
import CargoBoxes from './CarboBoxes';

const ShipmentDetail = (props) => {
  const { name, email, boxes } = useSelector(state => state.shipments.selectedShipment);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(loadShipmentDetails(id));
  }, [ id ]);

  return (
    <div className="shipment">
      <h2 className="shipment__name">{name}</h2>
      <a className="shipment__email" href={`mailto:${email}`}>{email}</a>
      { name && <CargoBoxes boxes={boxes} shipmentId={id} /> }
    </div>
  )
}

export default ShipmentDetail;
