import React from 'react'
import Logo from '../assets/logo.svg';
import Map from '../assets/map.png';
import { Navbar,Nav  } from 'react-bootstrap';

import './footer.css'


class Text_Image extends React.Component {

   render() {
      return (
        <div class="row">
          <div class="col">
            <h3>Title</h3>
            <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
          </div>
          <div class="col">
            <img alt="image"/>
          </div>
        </div>
      )
   }
}
export default Text_Image;
