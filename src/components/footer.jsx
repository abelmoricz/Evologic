import React from 'react'
import Logo from '../assets/logo.svg';
import Map from '../assets/map.png';
import { Navbar,Nav  } from 'react-bootstrap';

import './footer.css'


class Footer extends React.Component {

   render() {
      return (
        <div>

          <div className="footer">
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

            <Nav className="bottom_navigation">
              <Nav.Link href="/solve_and_make" >SOLVE and MAKE</Nav.Link>
              <Nav.Link href="/grow">Grow DIFFERENT</Nav.Link>
              <Nav.Link href="/mission">MISSION and VISION</Nav.Link>
              <Nav.Link href="/work_with_us">WORK with US</Nav.Link>
              <Nav.Link href="/work_with_us">Impressum</Nav.Link>
            </Nav>

        </div>
      )
   }
}
export default Footer;
