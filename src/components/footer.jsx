import React from 'react'
import Logo from '../assets/_Misc/logo.svg';
import Map from '../assets/_Misc/map.png';
import Email from '../assets/_Misc/email.png';
import { Navbar,Nav  } from 'react-bootstrap';
import {Route, BrowserRouter as Router, NavLink } from "react-router-dom";

import Grow from "../pages/Grow_Different/grow"
import Solve_Make from "../pages/Solve_and_Make/solve_make";
import Mission_Vision from "../pages/Mission_and_Vision/mission_vision";
import Work_With_Us from "../pages/Work_with_Us/work_with_us";

import './footer.css'


class Footer extends React.Component {

   render() {
      return (
        <div>

          <div className=" footer row align-items-center">

            <div className="col-sm-4 p-5 mx-auto">
              <NavLink to="/">
                <img src={Logo} width="100%"/>
              </NavLink>
              <h5 style={{marginLeft: 22 + "%", fontSize: 1.5 + "vw"}}><b>Grow Different</b></h5>
            </div>
            <div className="col-sm-4 p-5 mx-auto text-center">Evologic Technologies Office<br/>
              Lemböckgasse 49/B1.1<br/>
              1230 Vienna, AT<br/>
              <br/>
              Monday - Friday:<br/>
              08:00 - 16:00<br/>
              <br/>
              <a href="mailto:office@evologic-technologies.com"><img src={Email} /></a><br/>
            </div>
            <div className="col-sm-4 p-5 d-sm-block d-none"><img src={Map} width="100%"/></div>
          </div>

            <Nav className="bottom_navigation" >

              <NavLink  to="/solve_and_make">SOLVE and MAKE</NavLink>
              <NavLink to="/grow">Grow DIFFERENT</NavLink>
              <NavLink to="/mission">MISSION and VISION</NavLink>
              <NavLink to="/work_with_us">WORK with US</NavLink>
              <NavLink to="/impressum">Impressum</NavLink>
              {/*<NavLink to="/journalists">For Press</NavLink>*/}

            </Nav>


        </div>
      )
   }
}
export default Footer;
