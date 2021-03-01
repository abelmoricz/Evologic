import React from 'react';
import Text_Image from '../../components/text_image';

import hairyroots from '../../assets/Grow_Different/grow/hairyroots.jpg';
import approach from '../../assets/Grow_Different/grow/approach.jpg';
import dimensions from '../../assets/Grow_Different/grow/dimensions.png';
import setup from '../../assets/Grow_Different/grow/setup.jpg';

import './grow_plants.css';
import json from './_content.json';

class Plants extends React.Component {
   render() {
      return (
        <div className="mt-nav">
        <h1 className="green">Plants</h1>
          <div className="">
            <h3 className="green">Benefits of Plants</h3>
            <p className="col-sm-10 mx-auto mb-5">{json['plants']['benefits']}</p>

            <hr className="green"></hr>

           <h3 className="green col-sm-10 mx-auto">Improvements in the DEVELOPMENT Process</h3>

           <Text_Image orientation="text_right" img={hairyroots} text={json['plants']['intro to HR']} color="green" title="Introduction to Hairy Roots"/>
           <hr className="green"/>
           <Text_Image orientation="text_left" img={approach} text={json['plants']['development']} color="green" title="Development Approach"/>
           <hr className="green"/>
           <Text_Image orientation="text_right" img={dimensions} text={json['plants']['reactor']} color="green" title="Ideal Reactor Dimensions"/>
           <hr className="green"/>
           <Text_Image orientation="text_left" img={setup} text={json['plants']['setup']} color="green" title="Development of Reactor Setup"/>
           </div>

           <hr className="green"></hr>

           <h1 className="green mb-5">Our Project: InnCoCell</h1>
           <h3 className="green mx-auto">Growing AMF(Arbuscular Mycorrhizal Fungi) Better</h3>
           <p className="col-sm-8 mx-auto mb-5">{json['plants']['growing amf']}</p>
            <h3 className="green mx-auto">Better Plants Extracts</h3>
            <p className="col-sm-8 mx-auto mb-10">{json['plants']['extract']}</p>



        </div>
      )
   }
}
export default Plants;
