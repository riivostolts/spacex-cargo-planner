import React from 'react';
import { useSelector } from 'react-redux';
import Shipments from '../../components/Shipments';
import './Sidebar.scss';

const Sidebar = () => {
  const shipments = useSelector(state => state.shipments);

  return (
    <div className={`sidebar ${ shipments.shipments.length > 0 ? 'sidebar--scroll' : '' }`}>
      <Shipments shipments={shipments} />
    </div>
  )
}

export default Sidebar;
