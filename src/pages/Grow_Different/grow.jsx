import React from 'react';
import { NavLink } from 'react-router-dom';

import './grow.css'
import json from './_content.json';


class Grow extends React.Component {



   render() {
      return (
        <div className="grow mt-nav">
          <h1 className="green mb-5">Grow DIFFERENT</h1>
          <div className="bg_image_1">
            <div className="intro col-lg-9 offset-lg-2">
              <h3 className="green">How we Grow</h3>
              <p>{json['grow']['how']}</p>
            </div>
            <div className="intro col-lg-9 offset-lg-2">
              <h3 className="green">Overcoming specific Challenges</h3>
              <p>{json['grow']['challenges']}</p>
            </div>

            <div className="intro col-lg-8 offset-lg-3">
              <h3 className="green">Producing you Strain</h3>
              <p>{json['grow']['strain']}</p>
            </div>

            <div className="plants_content col-lg-5 offset-lg-5">
              <NavLink to="/plants"><h1 className="green">PLANTS</h1></NavLink>
              <p>{json['grow']['plants']}</p>
              <NavLink to="/plants"><h3 className="green">InnCoCell</h3></NavLink>
            </div>

            <div className="fungi_content col-lg-5 offset-lg-1">
              <NavLink to="/fungi"><h1 className="green">FUNGI</h1></NavLink>
              <p>{json['grow']['fungi']}</p>
              <NavLink to="/grow/fungi/phoma"><h3 className="green">Phoma</h3></NavLink>
              <NavLink to="/fungi"><h3 className="green my-4">MycoProScale</h3></NavLink>
            </div>

            <div className="bacteria_content col-lg-6 offset-lg-5">
              <NavLink to="/bacteria"><h1 className="green">BACTERIA</h1></NavLink>
              <p>{json['grow']['bacteria']}</p>
              <NavLink to="/bacteria"><h3 className="green">Rhizobia</h3></NavLink>
            </div>

          </div>



        </div>
      )
   }
}
export default Grow;
