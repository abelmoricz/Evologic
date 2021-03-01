import React from 'react';
import Text_Image from '../../components/text_image';
import './solve.css';

import grow from '../../assets/Solve_and_Make/solve/grow.jpg';
import quantify from '../../assets/Solve_and_Make/solve/quantify.jpg';
import realtime from '../../assets/Solve_and_Make/solve/realtime.jpg';
import formulation from '../../assets/Solve_and_Make/solve/formulation.JPG';
import depth from '../../assets/Solve_and_Make/solve/depth.jpg';

import upstream from '../../assets/_Misc/value_chain/production_blank.svg';
import downstream from '../../assets/_Misc/value_chain/formulation_blank.svg';
import analytics from '../../assets/Solve_and_Make/solve/analysis.svg';
import workshop from '../../assets/Solve_and_Make/solve/workshop.svg';

import json from './_content.json';

class Solve extends React.Component {
   render() {

     var orientation = "text_right";
     if (window.innerWidth <= 769){ //bootstrap 768 md breakpoint
      orientation = "text_left";
     }

      return (
        <div className="solve mt-nav">
        <div className="mb-10">
          <h1 className="red">Solve DIFFERENT</h1>
          <h3 className="red my-5">Our Solutions</h3>
          <p className="mb-5">{json["solve"]['intro']}</p>
          <Text_Image orientation={orientation} img={grow} text={json["solve"]['biomass']} color="red" title="Grow DIFFERENTIATED Biomass"/>
          <hr className="red"/>
          <Text_Image orientation="text_left" img={quantify} text={json["solve"]['quantify']} color="red" title="QUANTIFY differentiated Tissue"/>
          <hr className="red"/>
          <Text_Image orientation={orientation} img={realtime} text={json["solve"]['real time']} color="red" title="Real Time BIOMASS Sensing"/>
          <hr className="red"/>
          <Text_Image orientation="text_left" img={formulation} text={json["solve"]['formulation']} color="red" title="Formulation"/>
          <hr className="red"/>
          <Text_Image orientation={orientation} img={depth} text={json["solve"]['process']} color="red" title="In Depth Process UNDERSTANDING"/>
        </div>

          <h3 className="red mb-5">Our Tools</h3>
          <div className="row justify-content-center">
            <div className="text_box col-lg-2">
              <h4 className="red">Upstream</h4>
              <p>{json["solve"]['tool upstream']}</p>
            </div>
            <div className=" m-3 col-lg-2"><img src={upstream} /></div>
            <div className=" m-3 d-none d-lg-block col-lg-2"><img src={analytics}/></div>
            <div className="text_box col-lg-2">
              <h4 className="red">Analytics</h4>
              <p>{json["solve"]['tool analytics']}</p>
            </div>
            <div className="d-block d-lg-none col-lg-3"><img src={analytics} /></div>
          </div>

          <div className="row justify-content-center mb-10 mt-4">
            <div className="text_box col-lg-2">
              <h4 className="red">Downstream</h4>
              <p>{json["solve"]['tool downstream']}</p>
            </div>
            <div className=" m-3 col-lg-2"><img src={downstream} /></div>
            <div className=" m-3 d-none d-lg-block col-lg-2"><img src={workshop} /></div>
            <div className="text_box col-lg-2">
              <h4 className="red">Workshop</h4>
              <p>{json["solve"]['tool workshop']}</p>
            </div>
            <div className="border d-block d-lg-none col-md-2"><img src={workshop} /></div>
          </div>
        </div>
      )
   }
}
export default Solve;
