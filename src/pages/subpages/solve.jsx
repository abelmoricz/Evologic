import React from 'react';
import Text_Image from '../../components/text_image';
import './solve.css';

import grow from '../../assets/solve/grow.jpg';
import quantify from '../../assets/solve/quantify.jpg';
import realtime from '../../assets/solve/realtime.jpg';
import formulation from '../../assets/solve/formulation.JPG';
import depth from '../../assets/solve/depth.jpg';

class Solve extends React.Component {
   render() {

     var orientation = "text_right";
     if (window.innerWidth <= 769){ //bootstrap 768 md breakpoint
      orientation = "text_left";
     }

      return (
        <div className="solve">
        <div className="mb-10">
          <h1 className="red">Solve DIFFERENT</h1>
          <h3 className="red my-5">Our Solutions</h3>
          <p className="mb-5">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse</p>
          <Text_Image orientation={orientation} img={grow} color="red" title="Grow DIFFERENTIATED Biomass"/>
          <hr className="red"/>
          <Text_Image orientation="text_left" img={quantify} color="red" title="QUANTIFY differentiated Tissue"/>
          <hr className="red"/>
          <Text_Image orientation={orientation} img={realtime} color="red" title="Real Time BIOMASS Sensing"/>
          <hr className="red"/>
          <Text_Image orientation="text_left" img={formulation} color="red" title="Formulation"/>
          <hr className="red"/>
          <Text_Image orientation={orientation} img={depth} color="red" title="In Depth Process UNDERSTANDING"/>
        </div>

          <h3 className="red mb-5">Our Tools</h3>
          <div className="row mx-5">
            <div className="text_box col-lg-3">
              <h4 className="red">Upstream</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
            </div>
            <div className="col-lg-3">
              <img src={realtime} width="100%" />
            </div>
            <div className="d-none d-lg-block col-lg-3">
              <img src={realtime} width="100%" />
            </div>
            <div className="text_box col-lg-3">
              <h4 className="red">Analytics</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
            </div>
            <div className="d-block d-lg-none col-lg-3">
              <img src={realtime} width="100%" />
            </div>
          </div>

          <div className="row mx-5 mb-10 mt-4">
            <div className="text_box col-lg-3">
              <h4 className="red">Downstream</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
            </div>
            <div className="col-lg-3">
              <img src={realtime} width="100%" />
            </div>
            <div className="d-none d-lg-block col-lg-3">
              <img src={realtime} width="100%" />
            </div>
            <div className="text_box col-lg-3">
              <h4 className="red">Workshop</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
            </div>
            <div className="d-block d-lg-none col-md-3">
              <img src={realtime} width="100%" />
            </div>
          </div>
        </div>
      )
   }
}
export default Solve;
