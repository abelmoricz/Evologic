import React from 'react';
import goal2 from '../assets/un/img-goal-2.jpg';
import w_goal2 from '../assets/un/white-2.png';
import w_goal2_shadow from '../assets/un/white-2-shadow.png';
import goal6 from '../assets/un/img-goal-6.jpg';
import w_goal6 from '../assets/un/white-6.png';
import goal12 from '../assets/un/img-goal-12.jpg';
import w_goal12 from '../assets/un/white-12.png';
import goal15 from '../assets/un/img-goal-15.jpg';
import w_goal15 from '../assets/un/white-15.png';

import plants from '../assets/plants3 copy.jpg';
import bacteria from '../assets/bacteria.jpg';
import fungi from '../assets/fungi5 copy.jpg';

import strain from '../assets/value_chain/strain.svg';
import production from '../assets/value_chain/production.svg';
import formulation from '../assets/value_chain/formulation.svg';
import application from '../assets/value_chain/application.svg';
import distribution from '../assets/value_chain/distribution.svg';

import Image from '../components/image';



import './landing.css';
import { NavLink } from "react-router-dom";



class Landing extends React.Component {

   render() {
      return (
        <div className="landing">

          {/*Mission Section*/}
          <NavLink to="/mission"><h1 className="brown"> MISSION </h1></NavLink>
          <h3>“Make Science based Biologicals economically feasible”</h3>
          <p> In Furtherance of the UN Sustainability Development Goals </p>
          <div className="row">
            <div className="col-sm-3 col-6"><NavLink to="/mission"><Image text={<img src={w_goal2} />} img={goal2} /></NavLink></div>
            <div className="col-sm-3 col-6"><NavLink to="/mission"><Image text={<img src={w_goal6} />} img={goal6} /></NavLink></div>
            <div className="col-sm-3 col-6"><NavLink to="/mission"><Image text={<img src={w_goal12} />} img={goal12} /></NavLink></div>
            <div className="col-sm-3 col-6"><NavLink to="/mission"><Image text={<img src={w_goal15} />} img={goal15} /></NavLink></div>
          </div>

          {/*Solve and Make Section*/}
          <div className="my-10">
            <NavLink to="/solve_and_make"><h1 className="red"> SOLVE and MAKE </h1></NavLink>
            <p className="col-sm-8 mx-auto"> Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante
            in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet </p>
            <div className="row text-center">
              <div className="col-md-3 col-6">
                <NavLink to="/solve_and_make"><h1>98%</h1>
                <h5>quisque sagittis purus sit</h5></NavLink>
              </div>
              <div className="col-md-3 col-6">
                <NavLink to="/solve_and_make"><h1>22%</h1>
                <h5>consectetur a erat nam</h5></NavLink>
              </div>
              <div className="col-md-3 col-6">
                <NavLink to="/solve_and_make"><h1>17%</h1>
                <h5>nibh nisl condimentum id</h5></NavLink>
              </div>
              <div className="col-md-3 col-6">
                <NavLink to="/solve_and_make"><h1>2/3</h1>
                <h5>ipsum dolor sit amet</h5></NavLink>
              </div>
            </div>
          </div>

          {/*Grow Section*/}
          <div className="row">
            <div className="col-lg-6 text_box">
              <NavLink to="/grow"><h1 className="green"> Grow DIFFERENT </h1></NavLink>
              <p className=""> Sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa</p>
            </div>
            <div className="col-lg-6"><NavLink to="/grow/fungi"><Image text="Fungi" img={fungi} /></NavLink></div>
          </div>
          <div className="row">
            <div className="col-lg-6"><NavLink to="/grow/bacteria"><Image text="Bacteria" img={bacteria} /></NavLink></div>
            <div className="col-lg-6"><NavLink to="/grow/plants"><Image text="Plants" img={plants} /></NavLink></div>
          </div>

          {/*Grow Section*/}
          <div className="my-10">
            <NavLink to="/work_with_us"><h1 className="purple py-5"> WORK with US </h1></NavLink>
            <p className="col-sm-8 mx-auto"> Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit</p>
            <h3 className="py-5">Value Chain Fit</h3>
            <div className="row" align="middle">
              <NavLink to="/mission" className="col-md">
                <img src={strain} width="180" align="center"/>
                <h5>Strain</h5>
              </NavLink>
              <NavLink to="/mission" className="col-md">
                <img src={production} width="220"/>
                <h5>Production</h5>
              </NavLink>
              <NavLink to="/mission"  class="col-md">
                <img src={formulation} width="220"/>
                <h5>Formulation</h5>
              </NavLink>
              <NavLink to="/mission"  className="col-md">
                <img src={application} width="180"/>
                <h5>Application</h5>
              </NavLink>
              <NavLink to="/mission"  class="col-md">
                <img src={distribution} width="180"/>
                <h5>Distribution</h5>
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
