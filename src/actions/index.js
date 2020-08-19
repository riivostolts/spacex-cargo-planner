import { FETCH_SHIPMENTS, FETCH_SHIPMENT } from '../constants/'
import shipments from '../shipments.json'

export const loadAllShipments = () => {
  return {
    type: FETCH_SHIPMENTS,
    payload: shipments
  }
}

export const loadShipmentDetails = (id) => {
  return {
    type: FETCH_SHIPMENT,
    payload: id
  }
}