import React from 'react';
import { NavLink } from 'react-router-dom';

import './grow.css'


class Grow extends React.Component {



   render() {
      return (
        <div className="grow">
          <h1 className="green mb-5">Grow DIFFERENT</h1>
          <div className="bg_image_1">
            <div className="intro col-lg-9 offset-lg-2">
              <h3 className="green">How we Grow</h3>
              <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
            </div>
            <div className="intro col-lg-9 offset-lg-2">
              <h3 className="green">Overcoming specific Challenges</h3>
              <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
            </div>

            <div className="intro col-lg-8 offset-lg-3">
              <h3 className="green">Producing you Strain</h3>
              <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
            </div>

            <div className="plants_content col-lg-5 offset-lg-5">
              <NavLink to="/grow/plants"><h1 className="green">PLANTS</h1></NavLink>
              <p>Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi</p>
              <NavLink to="/grow/plants"><h3 className="green">InnoCell</h3></NavLink>
            </div>

            <div className="fungi_content col-lg-5 offset-lg-1">
              <NavLink to="/grow/fungi"><h1 className="green">FUNGI</h1></NavLink>
              <p>Posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit</p>
              <NavLink to="/grow/fungi/phoma"><h3 className="green">Phoma</h3></NavLink>
              <NavLink to="/grow/fungi"><h3 className="green my-4">MycoProScale</h3></NavLink>
            </div>

            <div className="bacteria_content col-lg-6 offset-lg-5">
              <NavLink to="/grow/bacteria"><h1 className="green">BACTERIA</h1></NavLink>
              <p>Sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac</p>
              <NavLink to="/grow/bacteria"><h3 className="green">Rhizobia</h3></NavLink>
            </div>

          </div>

          <div className="bg-image1"></div>
          <div className="bg-image1"></div>
          <div className="bg-image1"></div>


        </div>
      )
   }
}
export default Grow;
