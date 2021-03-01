import React from 'react';
import goal2 from '../assets/_Misc/UN/goal-2-bg.jpg';
import w_goal2 from '../assets/_Misc/UN/goal-2-bg.jpg';
import w_goal2_shadow from '../assets/_Misc/UN/white-2-shadow.png';
import goal6 from '../assets/_Misc/UN/goal-6-bg.jpg';
import w_goal6 from '../assets/_Misc/UN/white-6-shadow.png';
import goal12 from '../assets/_Misc/UN/goal-12-bg.jpg';
import w_goal12 from '../assets/_Misc/UN/white-12-shadow.png';
import goal15 from '../assets/_Misc/UN/goal-15-bg.jpg';
import w_goal15 from '../assets/_Misc/UN/white-15-shadow.png';

import plants from '../assets/_Misc/plant.jpg';
import bacteria from '../assets/_Misc/bacteria.jpg';
import fungi from '../assets/_Misc/fungi.jpg';

import strain from '../assets/_Misc/value_chain/strain.svg';
import production from '../assets/_Misc/value_chain/production.svg';
import formulation from '../assets/_Misc/value_chain/formulation.svg';
import application from '../assets/_Misc/value_chain/application.svg';
import distribution from '../assets/_Misc/value_chain/distribution.svg';
import field from '../assets/_Misc/value_chain/field.svg';
import arrow from '../assets/_Misc/value_chain/arrow.svg';

import Image from '../components/image';


import json from './_content.json';
import './landing.css';
import { NavLink } from "react-router-dom";



class Landing extends React.Component {

   render() {
     const icon_width = 160;
      return (
        <div className="landing mt-nav">

          {/*Mission Section*/}
          <NavLink to="/mission"><h1 className="brown"> MISSION </h1></NavLink>
          <h3>“Make Science based Biologicals economically feasible”</h3>
          <p> In Furtherance of the <a id="un" href="https://sdgs.un.org/goals">United Nations Sustainability Development Goals</a> </p>
          <div className="row">
            <div className="col-sm-3 col-6"><NavLink to="/mission"><Image text={<img src={w_goal2_shadow} />} img={goal2} /></NavLink></div>
            <div className="col-sm-3 col-6"><NavLink to="/mission"><Image text={<img src={w_goal6} />} img={goal6} /></NavLink></div>
            <div className="col-sm-3 col-6"><NavLink to="/mission"><Image text={<img src={w_goal12} />} img={goal12} /></NavLink></div>
            <div className="col-sm-3 col-6"><NavLink to="/mission"><Image text={<img src={w_goal15} />} img={goal15} /></NavLink></div>
          </div>

          {/*Solve and Make Section*/}
          <div className="my-10">
            <NavLink to="/solve_and_make"><h1 className="red"> {json["solve and make"]["title"]} </h1></NavLink>
            <p className="col-sm-11 mx-auto"> {json["solve and make"]["content"]} </p>
            <div className="row text-center">
              <div className="col-md-3 col-6">
                <NavLink to="/solve_and_make"><h1> {json["solve and make"]["stat1 title"]} </h1>
                <h5> {json["solve and make"]["stat1 content"]} </h5></NavLink>
              </div>
              <div className="col-md-3 col-6">
                <NavLink to="/solve_and_make"><h1>{json["solve and make"]["stat2 title"]}</h1>
                <h5>{json["solve and make"]["stat2 content"]}</h5></NavLink>
              </div>
              <div className="col-md-3 col-6">
                <NavLink to="/solve_and_make"><h1>{json["solve and make"]["stat3 title"]}</h1>
                <h5>{json["solve and make"]["stat3 content"]}</h5></NavLink>
              </div>
              <div className="col-md-3 col-6">
                <NavLink to="/solve_and_make"><h1>{json["solve and make"]["stat4 title"]}</h1>
                <h5>{json["solve and make"]["stat4 content"]}</h5></NavLink>
              </div>
            </div>
          </div>

          {/*Grow Section*/}
          <div className="row">
            <div className="col-lg-6 text_box">
              <NavLink to="/grow"><h1 className="green"> {json["grow different"]["title"]} </h1></NavLink>
              <p className="px-5"> {json["grow different"]["content"]} </p>
            </div>
            <div className="col-lg-6"><NavLink to="/fungi"><Image text="Fungi" img={fungi} /></NavLink></div>
          </div>
          <div className="row">
            <div className="col-lg-6"><NavLink to="/bacteria"><Image text="Bacteria" img={bacteria} /></NavLink></div>
            <div className="col-lg-6"><NavLink to="/plants"><Image text="Plants" img={plants} /></NavLink></div>
          </div>

          {/*Grow Section*/}
          <div className="my-10">
            <NavLink to="/work_with_us"><h1 className="purple py-5"> {json["work with us"]["title"]} </h1></NavLink>
            <p className="col-sm-8 mx-auto"> {json["work with us"]["content"]} </p>
            <h3 className="py-5">Value Chain Fit</h3>
            <div className="row value_chain col-lg-11 mx-auto" align="middle">
              <NavLink to="/mission" className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h5>Strain</h5>
              </NavLink>
              <img className="arrow" src={arrow} />
              <NavLink to="/mission" className="col-md">
                <img src={production} width={icon_width + 20}/>
                <h5>Production</h5>
              </NavLink>
              <img src={arrow} className="arrow"/>
              <NavLink to="/mission"  class="col-md">
                <img src={formulation} width={icon_width + 20}/>
                <h5>Formulation</h5>
              </NavLink>
              <img src={arrow} className="arrow"/>
              <NavLink to="/mission"  className="col-md">
                <img src={application} width={icon_width}/>
                <h5>Application</h5>
              </NavLink>
              <img src={arrow} className="arrow"/>
              <NavLink to="/mission"  class="col-md">
                <img src={distribution} width={icon_width}/>
                <h5>Distribution</h5>
              </NavLink>
              <img src={arrow} className="arrow"/>
              <NavLink to="/mission"  class="col-md">
                <img src={field} width={icon_width}/>
                <h5>Field</h5>
              </NavLink>
            </div>
            {/*BUTTON*/}
            <div className="row">
            <NavLink to="/mission" style={{marginTop: 10 +"%"}}class="col-sm-1 col-3 mx-auto btn-lg btn-primary">More</NavLink>
            </div>
          </div>

        </div> //end landing
      )
   }
}
export default Landing;
