import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import slugify from '../../utils/slugify';
import './Shipments.scss';

const Shipments = ({ shipments: { shipments } }) => {
  const { filterValue } = useSelector(state => state.shipments);

  if (!shipments.length) return <div>Please press load button to load shipments</div>

  let filteredShipments = shipments.filter(shipment => {
    return shipment.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
  });

  return (
    <div>
      <ul className="shipment-list">
        {
          filteredShipments.map(({ name, id }) => {
            return <li key={id} className="shipment-list__item"><NavLink to={`/company/${slugify(id)}`}>{name}</NavLink></li>
          })
        }
      </ul>
    </div>
  )
}

export default Shipments;
