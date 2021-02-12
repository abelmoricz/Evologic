import React from 'react';
import goal2 from '../assets/img-goal-2.jpg';
import goal6 from '../assets/img-goal-6.jpg';
import goal12 from '../assets/img-goal-12.jpg';
import goal15 from '../assets/img-goal-15.jpg';

import plants from '../assets/plants3 copy.jpg';
import bacteria from '../assets/bacteria.jpg';
import fungi from '../assets/fungi5 copy.jpg';

import './landing.css';



class Landing extends React.Component {

   render() {
      return (
        <div>

          <h1 className="brown"> MISSION </h1>
          <h3>“Make Science based Biologicals economically feasible”</h3>
          <p> In Furtherance of the UN Sustainability Development Goals </p>
          <div className="row container-fluid">
            <img className="col-sm-3" src={goal2} />
            <img className="col-sm-3" src={goal6} />
            <img className="col-sm-3" src={goal12} />
            <img className="col-sm-3" src={goal15} />
          </div>

          <div className="my-10">
            <h1 className="red"> SOLVE and MAKE </h1>
            <p className="col-8 offset-2"> Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante
            in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet </p>
            <div className="row text-center">
              <div className="col-lg-3">
                <h1>98%</h1>
                <h5>quisque sagittis purus sit</h5>
              </div>
              <div className="col-lg-3">
                <h1>22%</h1>
                <h5>consectetur a erat nam</h5>
              </div>
              <div className="col-md-3">
                <h1>17%</h1>
                <h5>nibh nisl condimentum id</h5>
              </div>
              <div className="col-md-3">
                <h1>2/3</h1>
                <h5>ipsum dolor sit amet</h5>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col text_box">
              <h1 className="green"> Grow DIFFERENT </h1>
              <p className=""> Sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa</p>
            </div>
            <img className="col-6" src={fungi} />
          </div>
          <div className="row">
            <img className="col-6" src={bacteria} />
            <img className="col-6" src={plants} />
          </div>

          <div className="my-10">
            <h1 className="purple"> WORK with US </h1>
            <p className="col-8 offset-2"> Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit</p>
            <h3>Value Chain Fit</h3>
          </div>

        </div>
      )
   }
}
export default Landing;
