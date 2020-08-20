import { FETCH_SHIPMENTS, FETCH_SHIPMENT, ADD_TO_CHANGED_SHIPMENTS } from '../constants/';
import findShipmentById from '../utils/findShipmentById';

const initialState = {
  shipments: [],
  selectedShipment: {},
  changedShipments: []
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
    case ADD_TO_CHANGED_SHIPMENTS:
      let changedShipment = findShipmentById(state.shipments, action.payload.id);
      changedShipment = {
        ...changedShipment,
        boxes: action.payload.cargo
      };

      // Check if changeShipments already has the shipment with the id that was just changed
      if (findShipmentById(state.changedShipments, action.payload.id)) {
        return Object.assign({}, state, {
          changedShipments: state.changedShipments.map(shipment => {
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

      // If changedShipments doesn't already have a shipment with the id that was just changed,
      // then just add it to the array
      return Object.assign({}, state, {
        changedShipments: [
          ...state.changedShipments,
          changedShipment
        ]
      });
    default:
      return state;
  }
}