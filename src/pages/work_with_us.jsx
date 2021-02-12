import React from 'react';
import profile from '../assets/people/bahar.png'

class Work_With_Us extends React.Component {
   render() {
      return (
        <div class="row">

          <div class="col-8">
            <h1>How we COLLABORATE</h1>
            <p class="cm">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non
            pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam
            non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie
            nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam</p>
            <h3>IP/Risk Sharing</h3>
            <div class="row cm align-items-center">
              <h4 class="col">Grant Opportunities</h4>
              <h4 class="col">In Kind Contribution</h4>
              <h4 class="col">Risk Sharing</h4>
            </div>
            <div class="row cm align-items-center">
              <h4 class="col">Creating Value Together</h4>
              <h4 class="col">Strategic Goal Definition</h4>
            </div>
            <p class="cm">lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna</p>

            <h3>Fee for Service</h3>
            <div class="row cm align-items-center">
              <h4 class="col">Goal Definition</h4>
              <h4 class="col">IP Transfer</h4>
              <h4 class="col">Milestone Based</h4>
            </div>
            <p class="cm">eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque
            egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar</p>
          </div>


          <div class="col-4 ">
            <h1>Who we Are</h1>
            <div class="row align-items-center">
            <img class=" img-thumbnail" src={profile} />
            </div>

          </div>
        </div>
      )

   }
}
export default Work_With_Us;
