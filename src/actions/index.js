import { FETCH_SHIPMENTS, FETCH_SHIPMENT, ADD_TO_CHANGED_SHIPMENTS } from '../constants/';
import findShipmentById from '../utils/findShipmentById';
import shipments from '../shipments.json';

export const loadAllShipments = () => {
  return {
    type: FETCH_SHIPMENTS,
    payload: shipments
  }
}

export const loadShipmentDetails = (id) => (dispatch, getState) => {
  let selectedShipment;
  const { changedShipments } = getState().shipments;
  if (findShipmentById(changedShipments, id)) {
    selectedShipment = findShipmentById(changedShipments, id);
  } else if (sessionStorage.getItem('cargoPlannerState')) {
    // If session storage exists, go and take shipments from there, otherwise get them from the shipments.json
    const { shipments: savedShipments } = JSON.parse(sessionStorage.getItem('cargoPlannerState')).shipments;
    selectedShipment = findShipmentById(savedShipments, id);
  } else {
    selectedShipment = findShipmentById(shipments, id);
  }

  dispatch({ type: FETCH_SHIPMENT, payload: selectedShipment })
}

export const addToChangedShipments = (id, cargo) => {
  return {
    type: ADD_TO_CHANGED_SHIPMENTS,
    payload: {
      id,
      cargo
    }
  }
}