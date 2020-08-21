import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { saveShipmentChanges } from '../actions';

const CarboBoxes = ({ boxes: originalBoxes, shipmentId }) => {
  const dispatch = useDispatch();
  // Separate values by space
  // const boxes = originalBoxes.split(',').join(', ');
  const boxes = originalBoxes ? originalBoxes : '';
  const [ cargoBoxes, setCargoBoxes ] = useState(boxes);
  const { id } = useSelector(state => state.shipments.selectedShipment);

  let numberOfBaysNeeded;

  if (cargoBoxes) {

    const unitsPerBay = 10;
    // Make the boxes string into an array and convert strings into numbers
    const boxesArr = cargoBoxes.split(',').map(number => number && parseFloat(number));

    // Get the sum of numbers in array
    const maximumNumberOfBoxes = boxesArr.reduce((sum, value) => sum + value, 0);

    // Round up and divide by 10 to get the total number of bays needed
    numberOfBaysNeeded = Math.ceil(maximumNumberOfBoxes / unitsPerBay);

  }

  useEffect(() => {
    setCargoBoxes(boxes);
  }, [ boxes ])

  useEffect(() => {
    if (cargoBoxes !== boxes) {
      dispatch(saveShipmentChanges(id, cargoBoxes));
    }
  }, [ shipmentId ]);

  const handleInputChange = (e) => {
    setCargoBoxes(e.target.value);
  }

  return (
    <div className="shipment__cargo">
      <p>Number of required cargo bays <strong>{ numberOfBaysNeeded ? numberOfBaysNeeded : '0' }</strong></p>
      <Form>
        <Form.Field>
          <label>Cargo boxes</label>
          <input value={cargoBoxes} onChange={handleInputChange} />
        </Form.Field>
      </Form>
    </div>
  )
}

export default CarboBoxes;
