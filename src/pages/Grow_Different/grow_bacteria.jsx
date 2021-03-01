import React from 'react';
import './grow_bacteria.css';
import json from './_content.json';


class Bacteria extends React.Component {
   render() {
      return (
        <div className="grow_bacteria mt-nav">
        <h1 className="green">Bacteria</h1>
          <h3 className="green">Benefits of Bacteria</h3>
          <p className="col-sm-10 mx-auto mb-5">{json['bacteria']['benefits']}</p>

          <h1 className="green">Our Project: Rhizobia</h1>
          <div style={{paddingBottom: 10 +'%'}} className="bg">
            <div className="col-lg-5 offset-lg-1 col-xl-6">
              <h3 className=" green">Description</h3>
              <p className="">{json['bacteria']['description']}</p>
              </div>
               <h3 className="green mt-5 col-lg-5 offset-lg-1">Improvements</h3>
               <div className="col-lg-5 offset-lg-1">
                 <h4 className="green">Productivity</h4>
                 <p className="">{json['bacteria']['productivity']}</p>
                </div>
              <div className="col-lg-8 offset-lg-1 col-xl-5 mt-5">
               <h4 className="green">Space Time Yield</h4>
               <p className="">{json['bacteria']['space time']}</p>
              </div>
            </div>
        </div>
      )
   }
}
export default Bacteria;
