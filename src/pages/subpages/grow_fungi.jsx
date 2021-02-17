import React from 'react';
import Image from '../../components/image';
import { NavLink } from 'react-router-dom';
import phoma from '../../assets/grow/fungi1.jpg';
import mycoproscale from '../../assets/grow/fungi2.jpg';

class Fungi extends React.Component {
   render() {
      return (
        <div className="grow_fungi">
          <h3 className="m-5 green">Benefits of Fungi</h3>
          <p className="m-5">Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere
          morbi leo urna molestie at elementum eu facilisis</p>
          <h1 className="green">Our Projects</h1>
          <div className="row mb-10">
            <div className="col-md-6" ><NavLink to="/solve_and_make/solve"><Image img={phoma} text="Phoma" /></NavLink></div>
            <div className="col-md-6" ><NavLink to="/solve_and_make/make"><Image img={mycoproscale} text="MycoProScale" /></NavLink></div>
          </div>

        </div>
      )
   }
}
export default Fungi;
