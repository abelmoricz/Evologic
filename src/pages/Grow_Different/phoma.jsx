import React from 'react';
import './phoma.css';
import json from './_content';


class Phoma extends React.Component {
   render() {
      return (
        <div className="phoma_bg pb-5 mt-nav">

          <h1 className="green">Phoma</h1>

            <div className="my-5 col-lg-7 offset-lg-4">
              <h3 className="green">Description</h3>
              <p className="">{json['phoma']['description']}</p>
            </div>
            <div className="mt-5 col-lg-5 offset-lg-6">
             <h3 className="green">How Evologic Technologies improved the DEVELOPMENT Process</h3>
               <p className="pb-5">{json['phoma']['improvements']}</p>


            </div>
        </div>
      )
   }
}
export default Phoma;
