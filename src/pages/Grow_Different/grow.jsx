import React from 'react';
import { NavLink } from 'react-router-dom';

import './grow.css'
import json from './_content.json';


class Grow extends React.Component {



   render() {
      return (
        <div className="grow">
          <div className="bg_image_1 mt-nav">

            {/*How we Grow*/}
            <h1 className="green offset-lg-2 mb-5">Grow DIFFERENT</h1>
            <div className="col-sm-10 offset-sm-1 col-lg-8 offset-lg-3">
              <h3 className="green mb-5">How we grow</h3>
              <p>{json['grow']['how']}</p>
              {/*2 Paragraphs*/}
              <div className="row mt-5">
                <div className="col-sm-10 mx-auto col-lg-6">
                  <h4 className="green">Overcoming specific challenges</h4>
                  <p className="px-3">{json['grow']['challenges']}</p>
                </div>
                <div className="col-sm-10 mx-auto col-lg-6">
                  <h4 className="green">Producing your strain</h4>
                  <p className="px-3">{json['grow']['strain']}</p>
                </div>
              </div>
            </div>
            <hr className="green d-block d-lg-none" />

            {/*PLANTS*/}
            <div className="plants_content col-sm-8 offset-sm-2 col-lg-5 offset-lg-4">
              <h1 className="green mb-5">What we grow</h1>
              <h3 className="green">Plants</h3>
              <p>{json['grow']['plants']}</p>
              <h4 className="green">InnCoCell</h4>
            </div>
            <hr className="green d-block d-lg-none" />

            {/*FUNGI*/}
            <div className="fungi_content col-sm-8 offset-sm-2 col-lg-5 offset-lg-1">
              <h3 className="green">Fungi</h3>
              <p>{json['grow']['fungi']}</p>
              <h4 className="green">Phoma</h4>
              <h4 className="green my-4">MycoProScale</h4>
            </div>
            <hr className="green d-block d-lg-none" />

            {/*BACTERIA*/}
            <div className="bacteria_content col-sm-8 offset-sm-2 col-lg-5 offset-lg-6">
              <h3 className="green">Bacteria</h3>
              <p>{json['grow']['bacteria']}</p>
              <h4 className="green">Rhizobia</h4>
            </div>




          </div>
        </div>
      )
   }
}
export default Grow;
