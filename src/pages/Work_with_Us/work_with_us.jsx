import React from 'react';
import { NavLink } from 'react-router-dom';

import together from '../../assets/Work_with_Us/together.jpg';
import grant from '../../assets/Work_with_Us/grant.jpg';
import exchange from '../../assets/Work_with_Us/exchange.jpg';

import milestone from '../../assets/Work_with_Us/milestone_2.jpg';
import concrete from '../../assets/Work_with_Us/concrete.jpg';
import contractor from '../../assets/Work_with_Us/contractor.jpg';
import collaboration from '../../assets/Work_with_Us/collaboration.jpg';

import Contact from '../../components/contact';
import Icon_Title from '../../components/icon_title';


import json from './_content.json';


class Work_With_Us extends React.Component {


   render() {

     const icon_width = "100%";

      return (
        <div className="mt-nav">
        <h1 className="grey my-5">WORK with US</h1>

        <div className="work_with_us row">


          <div className="col-md-11 my-5 mx-auto row">
            <div className="operative_img col-md-4">
              <img className="" src={collaboration} width="100%"/>
            </div>
            <div className="col-md-8 text_box">
              <h3 className="grey">Collaboration</h3>
              <p>{json["work with us page"]['collaboration']}</p>

              <div className="row mx-auto text-center" align="center">

              </div>
            </div>
          </div>



          <div className="row mt-5 mb-5">

            <div className="col-sm-6 p-sm-5">
              <h3 className="grey m-sm-3">IP/risk sharing</h3>
              <div className="row my-4" >
                <div className="col-4"><Icon_Title icon={together} title="Creating value together"/></div>
                <div className="col-4"><Icon_Title icon={grant} title="Grant opportunities"/></div>
                <div className="col-4"><Icon_Title icon={exchange} title="In kind exchange"/></div>

              </div>
              <p>{json["work with us page"]['ip sharing']}</p>
            </div>
            <div className="col-sm-6 p-sm-5">
              <h3 className="grey m-sm-3">Fee for service</h3>
              <div className="row my-4" >
                <div className="col-4"><Icon_Title icon={milestone} title="Milestone based payment"/></div>
                <div className="col-4"><Icon_Title icon={contractor} title="Contractor relationship"/></div>
                <div className="col-4"><Icon_Title icon={concrete} title="Concrete deliverables"/></div>
              </div>
              <p>{json["work with us page"]['fee']}</p>
            </div>

          </div>



        </div>
        <Contact color="#657073" />
        <div className="mb-7"></div>
        </div>


      )

   }
}
export default Work_With_Us;
