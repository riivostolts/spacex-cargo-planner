import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { saveShipmentChanges } from '../actions';

const CargoBoxes = ({ boxes: originalBoxes, shipmentId }) => {
  const dispatch = useDispatch();
  const boxes = originalBoxes ? originalBoxes.split(',').join(', ') : '';
  const [ cargoBoxes, setCargoBoxes ] = useState(boxes);
  const { id } = useSelector(state => state.shipments.selectedShipment);

  let numberOfBaysNeeded;

  if (cargoBoxes) {

    const unitsPerBay = 10;
    // Make the boxes string into an array and convert strings into numbers. Also remove NaN value if exists
    const boxesArr = cargoBoxes.split(',').filter(number => {
      if (!isNaN(parseFloat(number))) {
        return true;
      }
      return false;
    }).map(number => parseFloat(number));

    // Get the sum of numbers in array
    const maximumNumberOfBoxes = boxesArr.reduce((sum, value) => sum + value, 0);

    // Round up and divide by 10 to get the total number of bays needed
    numberOfBaysNeeded = Math.ceil(maximumNumberOfBoxes / unitsPerBay);

  }

  useEffect(() => {
    setCargoBoxes(boxes);
  }, [ boxes ])

  const handleShipmentChanges = () => {
    if (cargoBoxes !== boxes) {
      dispatch(saveShipmentChanges(id, cargoBoxes));
    }
  }

  return (
    <div className="shipment__cargo">
      <p>Number of required cargo bays <strong>{ numberOfBaysNeeded ? numberOfBaysNeeded : '0' }</strong></p>
      <Form>
        <Form.Field>
          <label>Cargo boxes</label>
          <input type="text" value={cargoBoxes} onChange={(e) => setCargoBoxes(e.target.value)} onBlur={handleShipmentChanges} />
        </Form.Field>
      </Form>
    </div>
  )
}

export default CargoBoxes;
