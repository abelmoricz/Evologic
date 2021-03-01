import React from 'react';
import Image from '../../components/image';
import { NavLink } from 'react-router-dom';
import phoma from '../../assets/Grow_Different/grow/fungi1.jpg';
import mycoproscale from '../../assets/Grow_Different/grow/fungi2.jpg';

class Fungi extends React.Component {
   render() {
      return (
        <div className=" mt-nav">
          <h1 className="green">Fungi</h1>
          <h3 className="green">Benefits of Fungi</h3>
          <p className="col-sm-10 mx-auto mb-5">Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere
          morbi leo urna molestie at elementum eu facilisis</p>
          <h1 className="green">Our Projects</h1>
          <div className="row mb-10">
            <div className="col-md-6" ><NavLink to="/grow/fungi/phoma"><Image img={phoma} text="Phoma" /></NavLink></div>
            <div className="col-md-6" ><NavLink to="/grow/fungi"><Image img={mycoproscale} text="MycoProScale" /></NavLink></div>
          </div>

        </div>
      )
   }
}
export default Fungi;
