
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
import Bacteria from "./pages/subpages/grow_bacteria";


import Solve_Make from "./pages/solve_make";
import Solve from "./pages/subpages/solve";
import Make from "./pages/subpages/make";

import Mission_Vision from "./pages/mission_vision";

import Work_With_Us from "./pages/work_with_us";
import About from "./pages/subpages/about";
import News from "./pages/subpages/news";
import Ip from "./pages/subpages/ip";
import Fee from "./pages/subpages/fee";

import Impressum from "./pages/impressum";
import ScrollToTop from './components/scrollToTop';


function App() {
  return (
    <div id="app" className="App">


      <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />

      <Navbar expand="xl">

        <Navbar.Brand>
          <NavLink to="/"><img src={Logo} width="180"/></NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="dropdown mydropdowncss">
              	<NavLink to="/solve_and_make" activeStyle={{fontWeight: "bold",color: "#CF4C43"}} className=" n_solve main_item" data-toggle="dropdown">SOLVE and MAKE</NavLink>
                <ul class="dropdown-menu ddm-1">
                  <li><NavLink className="solve" to="/solve_and_make/solve">Solve</NavLink></li>
                  <li><NavLink className="solve" to="/solve_and_make/make">Make</NavLink></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="dropdown mydropdowncss">
              	<NavLink to="/grow" activeStyle={{fontWeight: "bold",color: "#238223"}} className=" n_grow main_item" data-toggle="dropdown">Grow DIFFERENT</NavLink>
                  <ul class="dropdown-menu ddm-2">
                  	<li><NavLink className="grow" to="/grow/plants">Plants</NavLink></li>
                    <li><NavLink className="grow" to="/grow/fungi">Fungi</NavLink></li>
                    <li><NavLink className="grow" to="/grow/bacteria">Bacteria</NavLink></li>
                  </ul>
              </div>
            </li>

              <li class="nav-item"><div className="dropdown"><NavLink className="n_mission main_item" activeStyle={{fontWeight: "bold",color: "#542D2F"}} to="/mission">MISSION and VISION</NavLink></div></li>

            <li class="nav-item">
              <div class="dropdown mydropdowncss">
              	<NavLink to="/work_with_us" activeStyle={{fontWeight: "bold",color: "#433166"}} className="n_work main_item" data-toggle="dropdown">WORK with US</NavLink>
                  <ul class="dropdown-menu ddm-3">
                  	<li><NavLink className="work align-center" to="/work_with_us/about_us">About Us</NavLink></li>
                    <li><NavLink className="work" to="/work_with_us/news">News</NavLink></li>
                  </ul>
              </div>
              </li>
          </ul>

        </Navbar.Collapse>

      </Navbar>
        <Route path="/" exact component={Landing} />
        <Route path="/solve_and_make" exact component={Solve_Make} />
        <Route path="/solve_and_make/make" exact component={Make} />
        <Route path="/solve_and_make/solve" exact component={Solve} />

        <Route path="/grow" exact component={Grow} />
        <Route path="/grow/plants" exact component={Plants} />
        <Route path="/grow/fungi" exact component={Fungi} />
        <Route path="/grow/bacteria" exact component={Bacteria} />

        <Route path="/mission" exact component={Mission_Vision} />

        <Route path="/work_with_us" exact component={Work_With_Us} />
        <Route path="/work_with_us/about_us" exact component={About} />
        <Route path="/work_with_us/news" exact component={News} />
        <Route path="/work_with_us/ip_sharing" exact component={Ip} />
        <Route path="/work_with_us/fee_for_service" exact component={Fee} />

        <Route path="/impressum" exact component={Impressum} />


        <Footer />
      </Router>

    </div>
  );
}

export default App;
