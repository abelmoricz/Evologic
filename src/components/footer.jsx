import React from 'react'
import Logo from '../assets/logo.svg';
import Map from '../assets/map.png';
import { Navbar,Nav  } from 'react-bootstrap';
import {Route, BrowserRouter as Router, NavLink } from "react-router-dom";

import Grow from "../pages/grow"
import Solve_Make from "../pages/solve_make";
import Mission_Vision from "../pages/mission_vision";
import Work_With_Us from "../pages/work_with_us";


import './footer.css'


class Footer extends React.Component {

   render() {



      return (
        <div>

          <div className=" footer">

            <img src={Logo} width="180"/>
            <div className="contact">Evologic Technologies Office<br/>
              Lemböckgasse 49/B<br/>
              1230 Wien, AT<br/>
              <br/>
              Montag - Freitag:<br/>
              0800 - 1600<br/>
              <br/>
              <a href="mailto:office@evologic-technologies.com">office@evologic-technologies.com</a><br/>
              </div>
            <img src={Map} width="368"/>
          </div>

            <Nav className="bottom_navigation" >

              <NavLink  to="/solve_and_make">SOLVE and MAKE</NavLink>
              <NavLink to="/grow">Grow DIFFERENT</NavLink>
              <NavLink to="/mission">MISSION and VISION</NavLink>
              <NavLink to="/work_with_us">WORK with US</NavLink>
              <NavLink to="/impressum">Impressum</NavLink>

            </Nav>


        </div>
      )
   }
}
export default Footer;
