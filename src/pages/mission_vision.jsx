import React from 'react';
import { NavLink } from 'react-router-dom';
import './mission_vision.css';

import strain from '../assets/value_chain/strain.svg';
import production from '../assets/value_chain/production.svg';
import production_clean from '../assets/value_chain/production_blank.svg';
import formulation from '../assets/value_chain/formulation.svg';
import formulation_clean from '../assets/value_chain/formulation_blank.svg';
import application from '../assets/value_chain/application.svg';
import distribution from '../assets/value_chain/distribution.svg';

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
          <h3 className="my-5">“Make Science based Biologicals economically feasible”</h3>
          <div className="row m-5">
            <div className="col-md">
              <h4>Zero Hunger</h4>
              <p>netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi
              leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing</p>
            </div>
            <div className="col-md">
              <h4>Clean Water and Sanitation</h4>
              <p>commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum
              posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus</p>
            </div>
            <div className="col-md">
              <h4>Responsible Production</h4>
              <p>commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum
              posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus</p>
            </div>
            <div className="col-md">
              <h4>Life on Land</h4>
              <p>tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed</p>
            </div>
          </div>
          <h1 className="brown mt-10">VISION</h1>
          <h3 className=" mb-10">“Make Science based Biologicals economically feasible”</h3>

          <h3 id="value_chain" className="py-5 brown">Value Chain Fit</h3>

          <div className="row m-md-5 " align="middle">
            <div className="col" onClick={ this.change_to_strain } >
              <img className="img-fluid w-100" src={strain} align="center"/>
              <h5>Strain</h5>
            </div>
            <div className="col" onClick={ this.change_to_production } >
              <img className="img-fluid w-100" src={production} width="220"/>
              <h5>Production</h5>
            </div>
            <div class="col" onClick={ this.change_to_formulation } >
              <img className="img-fluid w-100" src={formulation} width="220"/>
              <h5>Formulation</h5>
            </div>
            <div className="col" onClick={ this.change_to_application } >
              <img className="img-fluid w-100" src={application} width="180"/>
              <h5>Application</h5>
            </div>
            <a class="col" onClick={ this.change_to_distribution } >
              <img className="img-fluid w-100" src={distribution} width="180"/>
              <h5>Distribution</h5>
            </a>
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

        </div> //end of mission_vision
      )
   }
}
export default Mission_Vision;
