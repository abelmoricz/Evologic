import React from 'react';
import Image from '../../components/image';

import quality from '../../assets/make/quality.jpg';
import adaptability from '../../assets/make/adaptability.jpg';
import one from '../../assets/make/1L.jpg';
import thirty from '../../assets/make/30L.jpg';
import five from '../../assets/make/500L.jpg';
import thousand from '../../assets/make/1000L.jpg';

import './make.css';


class Make extends React.Component {
   render() {
      return (
        <div className="make">
          <h1 className="red">Make DIFFERENT</h1>
          <h3 className="m-5 red">Introduction</h3>
          <p className="m-5">Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna
          molestie at elementum eu facilisis</p>
          <div className="row mt-5">
            <div className="col-md-6"><Image img={quality} addtext="1" text="Product Quality"/></div>
            <div className="col-md-6"><Image img={adaptability} addtext="1" text="Adaptability"/></div>
          </div>

          <div className="row mb-5 mt-10">
            <img className="col-md-2 offset-md-1" src={quality} />
            <div className="col-md-6">
              <p className="red">First Name Lastname and Credentials O.G.</p>
              <p>Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus</p>
            </div>
          </div>
          <div className="row bt-5 mb-10 " >
            <div className="col-md-6 offset-md-3 ">
              <p className="red">Company Name</p>
              <p>Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus</p>
            </div>
            <img className="col-md-2" src={quality} />
          </div>

          <h1 className="red">CAPABILITIES</h1>
          <h3 className="m-5 red">Production Park</h3>

          <div className="row mb-10" algin="middle">
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
              <h4  className="red">1000L (In Progress)</h4>
              <img id="thousand" src={thousand} width="100%"/>
            </div>
          </div>

          <div className="col-md-8 my-5 offset-md-2">
            <h3 className="red">Formulation</h3>
            <p>Integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt
            nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius</p>
          </div>
          <div className="col-md-6 my-5 offset-md-4">
            <h4 className="red">Special Formulation: Encapsulation</h4>
            <p>Arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida
            dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna</p>
          </div>
          <div className="col-md-4 my-5 offset-md-6">
            <h4 className="red">Spray Dry</h4>
            <p>nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget</p>
          </div>
          <div className="col-md-4 my-5 offset-md-7">
            <h4 className="red">Fluid Bed</h4>
            <p>nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget</p>
          </div>
          <div className="col-md-4 my-5 offset-md-7">
            <h4 className="red">Freeze Dry</h4>
            <p>nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget</p>
          </div>
          <div className="col-md-4 mb-10 offset-md-7">
            <h4 className="red">Liquid</h4>
            <p>nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget</p>
          </div>


        </div>
      )
   }
}
export default Make;
