
import './App_2.css';
import React from 'react';
import {Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import Logo from './assets/_Misc/logo.svg';

import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

import Landing from "./pages/landing";
import LinkedIn from "./pages/linkedin";

import Grow from "./pages/Grow_Different/grow";
import Plants from "./pages/Grow_Different/grow_plants";
import Fungi from "./pages/Grow_Different/grow_fungi";
import Phoma from "./pages/Grow_Different/phoma";
import Bacteria from "./pages/Grow_Different/grow_bacteria";

import Solve_Make from "./pages/Solve_and_Make/solve_make";
import Solve from "./pages/Solve_and_Make/solve";
import Make from "./pages/Solve_and_Make/make";

import Mission_Vision from "./pages/Mission_and_Vision/mission_vision";

import Work_With_Us from "./pages/Work_with_Us/work_with_us";
import About from "./pages/About_Us/about";
import News from "./pages/Work_with_Us/news_page";
import Ip_Risk_Sharing from "./pages/Work_with_Us/ip_risk_sharing";
import Fee from "./pages/Work_with_Us/fee_for_service";
import Wall from "./pages/Work_with_Us/email_wall";

import Impressum from "./pages/_Misc/impressum";
import Journalists from "./pages/_Misc/journalists";
import ProtectedRoute from "./components/Protected_Route";



import { loadReCaptcha } from 'react-recaptcha-google';


class App extends React.Component {

  componentDidMount() {
    loadReCaptcha();
    document.title = "Evologic - Grow. Different.";
  }

render() {
  return (
    <div id="app" className="App">

      <Router>
      <ScrollToTop />


      <Navbar className="sticky-top bg-white border py-3 custom_navbar" expand="xl">

        <Navbar.Brand><NavLink className="pl-5" to="/"><img src={Logo} width="220"/></NavLink></Navbar.Brand>

        {/*THIS is the hambuer menu button*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">

          <div className="nav-item-div n_mission ms-auto">
            <NavLink className="main_item" activeStyle={{borderBottom: 3 + "px solid #542D2F"}} to="/mission">MISSION and VISION</NavLink>
          </div>

          <div class="nav-item-div n_solve">
            <NavLink to="/solve_and_make" activeStyle={{borderBottom: 3 + "px solid #CF4C43"}} className="main_item" >SOLVE and MAKE</NavLink>
              <NavLink className="dd dd-1" activeClassName="dd-1-a" to="/solve">Solve</NavLink>
              <NavLink className="dd dd-2" activeClassName="dd-2-a" to="/make">Make</NavLink>
          </div>

          <div class="nav-item-div n_grow">
            <NavLink to="/grow" activeStyle={{borderBottom: 3 + "px solid #238223"}} className="main_item">Grow DIFFERENT</NavLink>
              	<NavLink className="dd dd-3" activeClassName="dd-3-a" to="/plants">Plants</NavLink>
                <NavLink className="dd dd-4" activeClassName="dd-4-a" to="/fungi">Fungi</NavLink>
                <NavLink className="dd dd-5" activeClassName="dd-5-a" to="/bacteria">Bacteria</NavLink>
          </div>

          <div class="nav-item-div n_work">
          	<NavLink to="/work_with_us" activeStyle={{borderBottom: 3 + "px solid #657073"}} className=" main_item">WORK with US</NavLink>
              	<NavLink className="dd dd-6" activeClassName="dd-6-a" to="/about_us">About Us</NavLink>
                <NavLink className="dd dd-7" activeClassName="dd-7-a" to="/news">News</NavLink>
          </div>
          <div className="nav-item-div n_about">
            <NavLink className="main_item" activeStyle={{borderBottom: 3 + "px solid #433166"}} to="/about_us">About US</NavLink>
          </div>

        </Navbar.Collapse>

      </Navbar>
      <Route path="/wall" exact component={Wall} />
      <Route path="/" exact component={Landing} />
      <Route path="/solve_and_make" exact component={Solve_Make} />

      <Route path="/make" exact component={Make} />
      <Route path="/solve" exact component={Solve} />

      <Route path="/grow" exact component={Grow} />


      <Route path="/plants" exact component={Plants} />
      <Route path="/fungi" exact component={Fungi} />
      <Route path="/bacteria" exact component={Bacteria} />

      {/*
        <ProtectedRoute path="/plants"><Plants /></ProtectedRoute>
        <ProtectedRoute path="/fungi"><Fungi /></ProtectedRoute>
        <ProtectedRoute path="/bacteria"><Bacteria /></ProtectedRoute>
        */}

      <Route path="/grow/fungi/phoma" exact component={Phoma} />

      <Route path="/mission" exact component={Mission_Vision} />


      <Route path="/work_with_us" exact component={Work_With_Us} />
      <Route path="/about_us" exact component={About} />
      <Route path="/news" exact component={News} />

      <Route path="/work_with_us/ip_sharing" exact component={Ip_Risk_Sharing} />
      <Route path="/work_with_us/fee_for_service" exact component={Fee} />

      <Route path="/impressum" exact component={Impressum} />
      <Route path="/journalists" exact component={Journalists} />

      {/*<Route path="/linkedin" exact component={LinkedIn} />*/}




        <Footer />

      </Router>

    </div>
  );
}
}


export default App;
