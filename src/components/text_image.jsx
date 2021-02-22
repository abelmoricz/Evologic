import React from 'react'
import Logo from '../assets/logo.svg';
import Map from '../assets/map.png';
import { Navbar,Nav  } from 'react-bootstrap';

import './text_image.css'


class Text_Image extends React.Component {

   render() {

     if(this.props.orientation == "text_left"){
      return (
        <div className=" text_image row py-5">
          <div className="col-md-6 text_box">
            <h3  className={`p-1 ${this.props.color}`}> {this.props.title} </h3>
            <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
          </div>
          <div className="image col-md-6">
            <img src={this.props.img} alt="image"/>
          </div>
        </div>
      )
    }
    if(this.props.orientation == "text_right"){
      return (
        <div className=" text_image row py-5">
          <div className="d-none d-md-block image col-md-6">
            <img src={this.props.img} alt="image"/>
          </div>
          <div className="text_box col-md-6">
            <h3 className={`p-1 ${this.props.color}`}>{this.props.title}</h3>
            <p>Gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
          </div>
          <div className="d-block d-md-none image col-md-6">
            <img src={this.props.img} alt="image"/>
          </div>

        </div>
      )
    }

   }
}
export default Text_Image;
