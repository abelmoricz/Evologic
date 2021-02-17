import React from 'react';
import profile from '../assets/work_with_us/bahar.png'
import { NavLink } from 'react-router-dom';
import strain from '../assets/value_chain/strain.svg';

import './work_with_us.css'

class Work_With_Us extends React.Component {


   render() {

     const icon_width = "140";
     const image = {
       width: 200 + 'px',
       height: 200 + 'px'
     }


      return (
        <div className="work_with_us row">

          <div className="col-md-8">
            <h1 className="purple">How we COLLABORATE</h1>
            <p className="m-5">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non
            pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam
            non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie
            nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam</p>
            <h3 className="purple mt-10">IP/Risk Sharing</h3>
            <div class="row m-5" align="middle">
              <div className="col-md" >
                <img src={strain} width={icon_width} align="center"/>
                <h4>Grant Opportunities</h4>
              </div>
              <div className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h4>In Kind Contribution</h4>
              </div>
              <div className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h4>Risk Sharing</h4>
              </div>
              <div className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h4>Creating Value Together</h4>
              </div>
              <div className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h4>Strategic Goal Definition</h4>
              </div>
            </div>
            <p class="m-5">lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna</p>
            <div className="row"><NavLink to="/mission" className="col-3 mx-auto my-3 btn-lg btn-primary">More</NavLink></div>

            <h3 className="purple mt-10">Fee for Service</h3>
            <div class="row m-5" align="middle">
              <div className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h4>Goal Definition</h4>
              </div>
              <div className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h4>IP Transfer</h4>
              </div>
              <div className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h4>Milestone Based</h4>
              </div>

            </div>
            <p class="mx-5">eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque
            egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar</p>
            <div className="row mb-10"><NavLink to="/mission" className="col-3 mx-auto my-3 btn-lg btn-primary">
            More
            </NavLink></div>
          </div>



          <div class="col-md-4 " align="center">
            <h1 className="purple mb-5">Who we Are</h1>
            <div >
              <img src={profile} style={image} />
              <h4 class="col-md-10 offset-md-1 mb-10">Some cool thing about the person</h4>
              <img class="" style={image} src={profile} />
              <h4 class="col-md-10 offset-md-1 mb-10">This is a really long sentence which shows off a feature seeting Evologic appart</h4>
              <img class="" style={image} src={profile} />
              <h4 class="col-md-10 offset-md-1 mb-10">Some cool thing about the person</h4>
              <img class="" style={image} src={profile} />
              <h4 class="col-md-10 offset-md-1 mb-10">Some cool thing about the person</h4>
            </div>

            <div className="btn-lg mx-auto my-10 col-3 btn-primary"><NavLink to="/mission" class="">
            More
            </NavLink></div>

          </div>
        </div>
      )

   }
}
export default Work_With_Us;
