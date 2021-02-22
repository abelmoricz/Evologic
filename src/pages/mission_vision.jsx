import React from 'react';
import { NavLink } from 'react-router-dom';

import strain from '../assets/value_chain/strain.svg';
import production from '../assets/value_chain/production.svg';
import production_clean from '../assets/value_chain/production_blank.svg';
import formulation from '../assets/value_chain/formulation.svg';
import formulation_clean from '../assets/value_chain/formulation_blank.svg';
import application from '../assets/value_chain/application.svg';
import distribution from '../assets/value_chain/distribution.svg';

import goal2 from '../assets/un/img-goal-2.jpg';
import w_goal2 from '../assets/un/white-2.png';
import goal6 from '../assets/un/img-goal-6.jpg';
import w_goal6 from '../assets/un/white-6.png';
import goal12 from '../assets/un/img-goal-12.jpg';
import w_goal12 from '../assets/un/white-12.png';
import goal15 from '../assets/un/img-goal-15.jpg';
import w_goal15 from '../assets/un/white-15.png';

import Value_Chain_Item from '../components/value_chain_item';
import Image from '../components/image';

class Mission_Vision extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        title: "",
        description: "",
    }
  }
  change_to_strain = () => {
    this.setState({ title: "Strain",
                    description: "Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim",
                    image: strain
    });
  }
  change_to_production = () => {
    this.setState({ title: "Production",
                    description: "Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat",
                    image: production_clean
    });
  }
  change_to_formulation = () => {
    this.setState({ title: "Formulation",
                    description: "Massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor",
                    image: formulation_clean
    });
  }
  change_to_application = () => {
    this.setState({ title: "Application",
                    description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida",
                    image: application
    });
  }

  change_to_distribution = () => {
    this.setState({ title: "Distribution",
                    description: "Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt",
                    image: distribution
    });
  }




   render() {
      return (
        <div className="mission">

          <h1 className="brown">MISSION</h1>
          <h3 className="mb-5">“Make Science based Biologicals economically feasible”</h3>

          <div className="row mt-5">
            <div className="col-md-3"><Image img={goal2} addtext="1" text={<img src={w_goal2} />}/></div>
            <div className="col-md-3"><Image img={goal6} addtext="1" text={<img src={w_goal6} />}/></div>
            <div className="col-md-3"><Image img={goal12} addtext="1" text={<img src={w_goal12} />}/></div>
            <div className="col-md-3"><Image img={goal15} addtext="1" text={<img src={w_goal15} />}/></div>
          </div>


          <h1 className="brown mt-10">VISION</h1>
          <h3 className=" mb-10">“Make Science based Biologicals economically feasible”</h3>

          <h1 id="value_chain" className="py-5 brown ">Value Chain Fit</h1>

          <div className="d-sm-block d-none cursor-pointer">
          <div className="row m-md-5 " align="middle">
            <div className="col" onClick={ this.change_to_strain } >
              <img className="w-100" src={strain} align="center"/>
              <h5>Strain</h5>
            </div>
            <div className="col" onClick={ this.change_to_production } >
              <img className="w-100" src={production} width="220"/>
              <h5>Production</h5>
            </div>
            <div class="col" onClick={ this.change_to_formulation } >
              <NavLink to=""><img className="w-100" src={formulation} width="220"/>
              <h5>Formulation</h5></NavLink>
            </div>
            <div className="col" onClick={ this.change_to_application } >
              <NavLink to=""><img className="w-100" src={application} width="180"/>
              <h5>Application</h5></NavLink>
            </div>
            <div class="col" onClick={ this.change_to_distribution } >
              <NavLink to=""><img className="w-100" src={distribution} width="180"/>
              <h5>Distribution</h5></NavLink>
            </div>
          </div>
          </div>

          <div className="row mt-5 mb-10" align="center">
            <div className="d-none d-lg-block col-4">
              <img className="offset-lg-3"src={ this.state.image } width="300"/>
            </div>
            <div className="col-lg-8 text_box" >
              <h3 className="brown"> { this.state.title } </h3>
              <p className="mx-lg-5">{ this.state.description }</p>
            </div>
          </div>

          {/*VALE chain ITEMS for mobile version*/}
          <div className="row d-sm-none d-block">
            <Value_Chain_Item img={strain} title="Strain" text="Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim"/>
            <Value_Chain_Item img={production} title="Production" text="Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim"/>
            <Value_Chain_Item img={formulation} title="Formulation" text="Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim"/>
            <Value_Chain_Item img={application} title="Application" text="Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim"/>
            <Value_Chain_Item img={distribution} title="Distribution" text="Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim"/>
          </div>

        </div>
      )
   }
}
export default Mission_Vision;
