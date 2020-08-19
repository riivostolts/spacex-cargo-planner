import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadShipmentDetails } from '../actions';
import { Form } from 'semantic-ui-react'

const ShipmentDetail = (props) => {
  const [ cargoBoxes, setCargoBoxes ] = useState('');
  const { name, email, boxes } = useSelector(state => state.shipments.selectedShipment);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(loadShipmentDetails(id));
    // setCargoBoxes(boxes); TODO: mountimisel peab kuidagi input välja boxidega ära täitma
  }, [ id ]);

  // useEffect(() => {
  //   setCargoBoxes(boxes);
  // }, [boxes]);

  return (
    <div className="shipment">
      <h2 className="shipment__name">{name}</h2>
      <a className="shipment__email" href={`mailto:${email}`}>{email}</a>

      <div className="shipment__cargo">
        <p>Number of required cargo bays <strong>2</strong></p>
        <h4>Cargo boxes: {cargoBoxes}</h4>
        <Form>
          <Form.Field>
            <label>Cargo boxes</label>
            <input value={cargoBoxes} onChange={(e) => setCargoBoxes(e.target.value) } />
          </Form.Field>
        </Form>
      </div>
    </div>
  )
}

export default ShipmentDetail;
