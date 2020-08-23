import React from 'react';
import { useSelector } from 'react-redux';
import Shipments from '../../components/Shipments/Shipments';
import './Sidebar.scss';

const Sidebar = ({ showSidebar, setShowSidebar }) => {

  const shipments = useSelector(state => state.shipments);

  return (
    <div className={`sidebar ${ showSidebar ? 'sidebar--show' : '' }  ${ shipments.shipments.length > 0 ? 'sidebar--scroll' : '' }`}>
      <Shipments shipments={shipments} setShowSidebar={setShowSidebar} />
    </div>
  )
}

export default Sidebar;
