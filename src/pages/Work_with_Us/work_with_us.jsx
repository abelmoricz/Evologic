import React from 'react';

import { NavLink } from 'react-router-dom';
import strain from '../../assets/value_chain/strain.svg';

import markus from '../../assets/Work_with_Us/markus.png';
import alejandro from '../../assets/Work_with_Us/alejandro.png';
import paul from '../../assets/Work_with_Us/paul.png';
import judith from '../../assets/Work_with_Us/judith.png';
import wieland from '../../assets/Work_with_Us/wieland.png';


class Work_With_Us extends React.Component {


   render() {

     const icon_width = "120";

      return (
        <div className="mt-nav">
        <h1 className="purple my-5">WORK with US</h1>

        <div className="work_with_us row">
          <div  className="col-md-8">
            <h3 className="purple mb-5">Collaboration</h3>

            <p className="col-md-10 mx-auto">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non
            pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam
            non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie
            nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam</p>
            <h3 className="purple mt-10 mb-5">IP/Risk Sharing</h3>
            <div style={{fontWeight: "bolder"}} class="row mx-md-5" align="middle">
              <div className="col-sm col-6" >
                <h5>Grant Opportunities</h5>
              </div>
              <div className="col-sm col-6">
                <h5>In Kind Contribution</h5>
              </div>
              <div className="col-sm col-6">
                <h5>Risk Sharing</h5>
              </div>

            </div>
            <p class="col-sm-10 my-5 mx-auto">lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna</p>
            <div className="row"><NavLink to="/work_with_us/ip_sharing" className="col-sm-2 col-4 mx-auto my-3 btn-lg btn-primary">More</NavLink></div>

            <h3 className="purple mt-10 mb-5">Fee for Service</h3>
            <div style={{fontWeight: "bolder"}} class="row mx-md-5" align="middle">
              <div className="col-sm col-6" >
                <h5>Goal Definition</h5>
              </div>
              <div className="col-sm col-6">
                <h5>IP Transfer</h5>
              </div>
              <div className="col-sm col-6">
                <h5>Milestone based</h5>
              </div>

            </div>
            <p class="col-sm-10 my-5 mx-auto">eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque
            egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar</p>
            <div className="row mb-10"><NavLink to="/work_with_us/fee_for_service" className="col-sm-2 col-4 mx-auto my-3 btn-lg btn-primary">
            More
            </NavLink></div>
          </div>



          <div class="col-md-4 " align="center">
            <h3 className="purple mb-5">Who we Are</h3>
            <div >
              <img src={markus} />
              <h5 class="col-md-10 mx-auto mb-10">Some cool thing about the person</h5>
              <img src={judith} />
              <h5 class="col-md-10 mx-auto mb-10">This is a really long sentence which shows off a feature seeting Evologic appart</h5>
              <img src={wieland} />
              <h5 class="col-md-10 mx-auto mb-10">Some cool thing about the person</h5>
              <img src={alejandro} />
              <h5 class="col-md-10 mx-auto mb-10">Some cool thing about the person</h5>
              <img src={paul} />
              <h5 class="col-md-10 mx-auto mb-10">Some cool thing about the person</h5>
            </div>

            <div className="row my-10 "><NavLink to="/work_with_us/about_us" className="col-sm-4 col-4 mx-auto btn-lg btn-primary">
            More
            </NavLink></div>

          </div>
        </div>
      </div>
      )

   }
}
export default Work_With_Us;
