
import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import Logo from './assets/logo.svg';
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap';

import Footer from './components/footer';
import Landing from "./pages/landing"

import Grow from "./pages/grow";
import Plants from "./pages/subpages/grow_plants";
import Fungi from "./pages/subpages/grow_fungi";
import Phoma from "./pages/subpages/phoma";
import Bacteria from "./pages/subpages/grow_bacteria";


import Solve_Make from "./pages/solve_make";
import Solve from "./pages/subpages/solve";
import Make from "./pages/subpages/make";

import Mission_Vision from "./pages/mission_vision";

import Work_With_Us from "./pages/work_with_us";
import About from "./pages/subpages/about";
import News from "./pages/subpages/news_page";
import Ip_Risk_Sharing from "./pages/subpages/ip_risk_sharing";
import Fee from "./pages/subpages/fee_for_service";

import Impressum from "./pages/impressum";
import Journalists from "./pages/journalists";
import ScrollToTop from './components/scrollToTop';

import { loadReCaptcha } from 'react-recaptcha-google';





class App extends React.Component {

  componentDidMount() {
  loadReCaptcha();
  }




render() {
  return (
    <div id="app" className="App">


      <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />

      <Navbar className="sticky-top bg-white" expand="xl">
        {/*<div className="navbar_content">*/}
        <Navbar.Brand>
          <NavLink to="/"><img src={Logo} width="180"/></NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="n_solve dropdown mydropdowncss">
              	<NavLink to="/solve_and_make" activeStyle={{fontWeight: "bold",color: "#CF4C43"}} className="  main_item" data-toggle="dropdown">SOLVE and MAKE</NavLink>
                <ul class="dropdown-menu ddm-1">
                  <li><NavLink className="solve" to="/solve_and_make/solve">Solve</NavLink></li>
                  <li><NavLink className="solve" to="/solve_and_make/make">Make</NavLink></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="n_grow dropdown mydropdowncss">
              	<NavLink to="/grow" activeStyle={{fontWeight: "bold",color: "#238223"}} className="  main_item" data-toggle="dropdown">Grow DIFFERENT</NavLink>
                  <ul class="dropdown-menu ddm-2">
                  	<li><NavLink className="grow" to="/grow/plants">Plants</NavLink></li>
                    <li><NavLink className="grow" to="/grow/fungi">Fungi</NavLink></li>
                    <li><NavLink className="grow" to="/grow/bacteria">Bacteria</NavLink></li>
                  </ul>
              </div>
            </li>

              <li class="nav-item"><div className="n_mission dropdown"><NavLink className=" main_item" activeStyle={{fontWeight: "bold",color: "#542D2F"}} to="/mission">MISSION and VISION</NavLink></div></li>

            <li class="nav-item">
              <div class="n_work dropdown mydropdowncss">
              	<NavLink to="/work_with_us" activeStyle={{fontWeight: "bold",color: "#433166"}} className=" main_item" data-toggle="dropdown">WORK with US</NavLink>
                  <ul class="dropdown-menu ddm-3" >
                  	<li><NavLink className="work" id="our_team" to="/work_with_us/about_us">Our Team</NavLink></li>
                    <li><NavLink className="work" to="/work_with_us/news">News</NavLink></li>
                  </ul>
              </div>
              </li>
          </ul>

        </Navbar.Collapse>
        {/*</div>*/}
      </Navbar>


        <Route path="/" exact component={Landing} />
        <Route path="/solve_and_make" exact component={Solve_Make} />
        <Route path="/solve_and_make/make" exact component={Make} />
        <Route path="/solve_and_make/solve" exact component={Solve} />

        <Route path="/grow" exact component={Grow} />
        <Route path="/grow/plants" exact component={Plants} />
        <Route path="/grow/fungi" exact component={Fungi} />
        <Route path="/grow/fungi/phoma" exact component={Phoma} />
        <Route path="/grow/bacteria" exact component={Bacteria} />

        <Route path="/mission" exact component={Mission_Vision} />

        <Route path="/work_with_us" exact component={Work_With_Us} />
        <Route path="/work_with_us/about_us" exact component={About} />
        <Route path="/work_with_us/news" exact component={News} />

        <Route path="/work_with_us/ip_sharing" exact component={Ip_Risk_Sharing} />
        <Route path="/work_with_us/fee_for_service" exact component={Fee} />

        <Route path="/impressum" exact component={Impressum} />
        <Route path="/journalists" exact component={Journalists} />


        <Footer />
      </Router>

    </div>
  );
}
}


export default App;
