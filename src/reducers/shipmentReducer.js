import { FETCH_SHIPMENTS, FETCH_SHIPMENT, SAVE_SHIPMENT_CHANGES, SET_FILTER_VALUE } from '../constants/';

const initialState = {
  shipments: [],
  selectedShipment: {},
  filterValue: ''
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
    case SET_FILTER_VALUE:
      return Object.assign({}, state, {
        filterValue: action.payload
      });
    default:
      return state;
  }
}