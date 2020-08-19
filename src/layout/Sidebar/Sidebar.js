import React from 'react';
import { useSelector } from 'react-redux';
import Shipments from '../../components/Shipments';
import './Sidebar.scss';

const Sidebar = () => {
  const shipments = useSelector(state => state.shipments);
  /* useEffect(() => {

  }, []) */

  // componentDidMount() {
  //   this.props.loadAllShipments();
  // }

  return (
    <div className="sidebar">
      <Shipments shipments={shipments} />
    </div>
  )
}

export default Sidebar;

/* const mapStateToProps = ({ shipments }) => {
  return {
    shipments
  }
} */

// export default connect( mapStateToProps, { loadAllShipments } )( Sidebar )
