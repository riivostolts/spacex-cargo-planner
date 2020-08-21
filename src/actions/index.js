import { FETCH_SHIPMENTS, FETCH_SHIPMENT, SAVE_SHIPMENT_CHANGES, SET_FILTER_VALUE } from '../constants/';
import findShipmentById from '../utils/findShipmentById';
import shipmentsJson from '../shipments.json';

export const loadAllShipments = (source = shipmentsJson) => {
  return {
    type: FETCH_SHIPMENTS,
    payload: source
  }
}

export const loadShipmentDetails = (id) => (dispatch, getState) => {
  const shipments = getState().shipments.shipments.length ? getState().shipments.shipments : shipmentsJson;
  const selectedShipment = findShipmentById(shipments, id);
  dispatch({ type: FETCH_SHIPMENT, payload: selectedShipment })
}

export const saveShipmentChanges = (id, cargo) => {
  return {
    type: SAVE_SHIPMENT_CHANGES,
    payload: {
      id,
      cargo
    }
  }
}

export const setFilterValue = (val) => {
  return {
    type: SET_FILTER_VALUE,
    payload: val
  }
}