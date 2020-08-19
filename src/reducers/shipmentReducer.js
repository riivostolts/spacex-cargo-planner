import { FETCH_SHIPMENTS, FETCH_SHIPMENT } from '../constants/'
import shipments from '../shipments.json';

const initialState = {
  shipments: [],
  selectedShipment: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHIPMENTS:
      return Object.assign({}, state, {
        shipments: action.payload
      });
    case FETCH_SHIPMENT:
      const selectedShipment = shipments.find(shipment => shipment.id === action.payload);
      return Object.assign({}, state, {
        selectedShipment
      });
    default:
      return state;
  }
}