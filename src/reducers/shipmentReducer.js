import { FETCH_SHIPMENTS, FETCH_SHIPMENT, SAVE_SHIPMENT_CHANGES } from '../constants/';
import findShipmentById from '../utils/findShipmentById';

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
      return Object.assign({}, state, {
        selectedShipment: action.payload
      });
    case SAVE_SHIPMENT_CHANGES:

      if (findShipmentById(state.shipments, action.payload.id)) {
        return Object.assign({}, state, {
          shipments: state.shipments.map(shipment => {
            // Find the correct one and change the "boxes" value
            if (shipment.id === action.payload.id) {
              return {
                ...shipment,
                boxes: action.payload.cargo
              }
            } else {
              return shipment;
            }
          })
        });
      }
    default:
      return state;
  }
}