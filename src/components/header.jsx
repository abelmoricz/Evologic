import React from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

import './header.css'


class Header extends React.Component {

   render() {
      return (
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/">
            <img src={Logo} width="180" height="58" alt="evologic logo"/>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse navigation-items" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/make">MAKE and DEVELOP </a>
                <ul class="submenu">
                  <li><a href="">Make DIFFERENT</a></li>
                  <li><a href="">Develop DIFFERENT</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/grow">Grow DIFFERENT  </a>
                <ul class="submenu">
                    <li><a href="#">Plants</a></li>
                    <li><a href="#">Fungi</a></li>
                    <li><a href="#">Bacteria</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/mission">MISSION and VISION </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/work_with_us">WORK with US </a>
              </li>
            </ul>
          </div>

        </nav>
      )
   }
}
export default Header;
