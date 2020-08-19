import React from 'react';
import { NavLink } from 'react-router-dom';
import slugify from '../utils/slugify';

const Shipments = ({ shipments: { shipments } }) => {

  if (!shipments.length) return <div>Please press load button to load shipments</div>

  return (
    <div>
      <ul className="shipments-list">
        {
          shipments.map(({ name, id }) => {
            return <li key={id} className="shipment-list__item"><NavLink to={`/company/${slugify(id)}`}>{name}</NavLink></li>
          })
        }
      </ul>
    </div>
  )
}

export default Shipments;
