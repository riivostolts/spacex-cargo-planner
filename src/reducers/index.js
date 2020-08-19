import { combineReducers } from 'redux'
import shipmentReducer from './shipmentReducer';

export default combineReducers({
  shipments: shipmentReducer
});