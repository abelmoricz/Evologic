import React from 'react';
import Image from '../../components/image';

import quality from '../../assets/Solve_and_Make/make/quality.jpg';
import adaptability from '../../assets/Solve_and_Make/make/adaptability.jpg';
import one from '../../assets/Solve_and_Make/make/1L.jpg';
import thirty from '../../assets/Solve_and_Make/make/30L.jpg';
import five from '../../assets/Solve_and_Make/make/500L.jpg';
import thousand from '../../assets/Solve_and_Make/make/1000L.jpg';

import './make.css';
import json from './_content.json';


class Make extends React.Component {
   render() {
      return (
        <div className="make mt-nav">
          <h1 className="red">Make DIFFERENT</h1>
          <h3 className="m-5 red">Introduction</h3>
          <p className="m-5">{json['make']['intro']}</p>
          <div className="row mt-5 mb-7">
            <div className="col-md-6"><Image img={quality} content={json['make']['product quality']} addtext="1" text="Product Quality"/></div>
            <div className="col-md-6"><Image img={adaptability} content={json['make']['adaptability']} addtext="1" text="Adaptability"/></div>
          </div>

          <div className="row mb-5">
            <img className="col-md-2 offset-md-1" src={quality} />
            <div className="col-md-6">
              <p className="red">First Name Lastname and Credentials O.G.</p>
              <p>{json['make']['testamonial_1']}</p>
            </div>
          </div>
          <div className="row bt-5 mb-7 " >
            <div className="col-md-6 offset-md-3 ">
              <p className="red">Company Name</p>
              <p>{json['make']['testamonial_2']}</p>
            </div>
            <img className="col-md-2" src={quality} />
          </div>

          <h1 className="red">CAPABILITIES</h1>
          <h3 className="m-5 red">Production Park</h3>

          <div className="row mb-7" algin="middle">
            <div className="col-md-3">
              <h4 className="red">1L</h4>
              <img src={one} width="100%"/>
            </div>
            <div className="col-md-3">
              <h4 className="red">30L</h4>
              <img src={thirty} width="100%" />
            </div>
            <div className="col-md-3">
              <h4 className="red">500L</h4>
              <img src={five} width="100%"/>
            </div>
            <div className="col-md-3">
              <h4  className="red">1000L </h4>

              <div className="box">
                <img id="thousand" src={thousand} width="100%"/>
                <div className="text"><h4 className="on_top ">In Progress</h4></div>
              </div>

            </div>
          </div>

          <div className="bg_make pb-5">
            <div className="col-lg-10 mx-auto">
              <h3 className="red">Formulation</h3>
              <p>{json['make']['formulation']}</p>
            </div>
            <div className="col-lg-6 my-5 offset-lg-5 col-xl-6 offset-xl-5">
              <h4 className="red">Special Formulation: Encapsulation</h4>
              <p>{json['make']['encapsulation']}</p>
            </div>
            <div className="col-lg-5 my-5 offset-lg-6 col-xl-6 offset-xl-5">
              <h4 className="red">Spray Dry</h4>
              <p>{json['make']['spray dry']}</p>
            </div>
            <div className="col-lg-3 my-5 offset-lg-9 col-xl-4 offset-xl-7">
              <h4 className="red">Fluid Bed</h4>
              <p>{json['make']['fluid']}</p>
            </div>
            <div className="my-5 col-lg-2 offset-lg-10 col-xl-4 offset-xl-7">
              <h4 className="red">Freeze Dry</h4>
              <p>{json['make']['freeze']}</p>
            </div>
            <div className="col-lg-2 offset-lg-10 col-xl-3 offset-xl-8">
              <h4 className="red">Liquid</h4>
              <p>{json['make']['liquid']}</p>
            </div>
          </div>

        </div>
      )
   }
}
export default Make;
