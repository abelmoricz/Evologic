import React from 'react';

import './grow.css'



var style_1 = {
  marginLeft: 25 + '%',
  marginRight: 10 +'%',
  paddingTop: 10 + '%'
};
var style_2 = {
  marginLeft: 25 + '%',
  marginRight: 10 +'%',
  paddingTop: 10 + '%'
};
var style_3 = {
  marginLeft: 40 + '%',
  marginRight: 20 +'%',
  paddingTop: 10 + '%'
};
var style_4 = {
  marginLeft: 20 + '%',
  marginRight: 50 +'%',
  paddingTop: 20 + '%',
  paddingBottom: 20 + '%'
};

class Grow extends React.Component {



   render() {
      return (
        <div class="grow">
          <h1>Grow DIFFERENT</h1>
          <div class="bg_image_1">
            <div style={style_1}>
              <h3>How we Grow</h3>
              <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
            </div>
            <div style={style_1}>
              <h3>Overcoming specific Challenges</h3>
              <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
            </div>

            <div style={style_2}>
              <h3>Producing you Strain</h3>
              <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
            </div>

            <div style={style_3}>
              <h1>PLANTS</h1>
              <p>Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi</p>
              <h3>InnoCell</h3>
            </div>

            <div style={style_4}>
              <h1>FUNGI</h1>
              <p>Posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit</p>
              <h3>Phoma</h3>
              <h3>MycoProScale</h3>
            </div>

            <div style={style_3}>
              <h1>BACTERIA</h1>
              <p>Sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac</p>
              <h3>Rhizobia</h3>
            </div>

          </div>

        </div>
      )
   }
}
export default Grow;
