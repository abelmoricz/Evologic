import React from 'react';
import { NavLink } from 'react-router-dom';

import strain from '../../assets/_Misc/value_chain/strain.svg';
import production from '../../assets/_Misc/value_chain/production_brown.svg';
import production_clean from '../../assets/_Misc/value_chain/production_blank.svg';
import formulation from '../../assets/_Misc/value_chain/formulation_brown.svg';
import formulation_clean from '../../assets/_Misc/value_chain/formulation_blank.svg';
import application from '../../assets/_Misc/value_chain/application.svg';
import distribution from '../../assets/_Misc/value_chain/distribution.svg';
import field from '../../assets/_Misc/value_chain/field.svg';
import arrow from '../../assets/_Misc/value_chain/arrow.svg';

import goal2 from '../../assets/_Misc/UN/goal-2-bg.jpg';
import w_goal2 from '../../assets/_Misc/UN/white-2-shadow.png';
import goal6 from '../../assets/_Misc/UN/goal-6-bg.jpg';
import w_goal6 from '../../assets/_Misc/UN/white-6-shadow.png';
import goal12 from '../../assets/_Misc/UN/goal-12-bg.jpg';
import w_goal12 from '../../assets/_Misc/UN/white-12-shadow.png';
import goal15 from '../../assets/_Misc/UN/goal-15-bg.jpg';
import w_goal15 from '../../assets/_Misc/UN/white-15-shadow.png';

import Value_Chain_Item from '../../components/value_chain_item';
import Image from '../../components/image';

import './mission_vision.css';
import json from './_content.json';

class Mission_Vision extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Strain",
      description: json["vc"]["strain"],
      image: strain
    }
  }
  change_to_strain = () => {
    this.setState({ title: "Strain",
                    description: json["vc"]["strain"],
                    image: strain
    });
  }
  change_to_production = () => {
    this.setState({ title: "Production",
                    description: json["vc"]["production"],
                    image: production_clean
    });
  }
  change_to_formulation = () => {
    this.setState({ title: "Formulation",
                    description: json["vc"]["formulation"],
                    image: formulation_clean
    });
  }
  change_to_application = () => {
    this.setState({ title: "Application",
                    description: json["vc"]["application"],
                    image: application
    });
  }

  change_to_distribution = () => {
    this.setState({ title: "Distribution",
                    description: json["vc"]["distribution"],
                    image: distribution
    });
  }
  change_to_field = () => {
    this.setState({ title: "Field",
                    description: json["vc"]["field"],
                    image: field
    });
  }




   render() {

     const icon_width = 160;
      return (
        <div className="mission mt-nav">

          <h1 className="brown">MISSION</h1>
          <h3 className="mb-5">“Make Science based Biologicals economically feasible”</h3>

          <div className="row mt-5 mb-7">
            <div className="col-md-3"><Image img={goal2} addtext="1" content={json["un goals"]["2"]} text={<img src={w_goal2} />}/></div>
            <div className="col-md-3"><Image img={goal6} addtext="1" content={json["un goals"]["6"]} text={<img src={w_goal6} />}/></div>
            <div className="col-md-3"><Image img={goal12} addtext="1" content={json["un goals"]["12"]} text={<img src={w_goal12} />}/></div>
            <div className="col-md-3"><Image img={goal15} addtext="1" content={json["un goals"]["15"]} text={<img src={w_goal15} />}/></div>
          </div>


          <h1 className="brown">VISION</h1>
          <h3 className=" mb-7">“Supply best in class biologicals to the industry”</h3>

          <h1 id="value_chain" className="py-5 brown ">Value Chain Fit</h1>

          <div className="d-sm-block d-none ">
          <div className="row value_chain col-lg-11 mx-auto" align="middle">
            <div className="vc_item col-md px-0" onClick={this.change_to_strain}>
              <img src={strain} width={icon_width} />
              <h5>Strain</h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onClick={this.change_to_production}>
              <img src={production} width={icon_width + 20}/>
              <h5>Production</h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onClick={this.change_to_formulation}>
              <img src={formulation} width={icon_width + 20}/>
              <h5>Formulation</h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onClick={this.change_to_application}>
              <img src={application} width={icon_width}/>
              <h5>Application</h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onClick={this.change_to_distribution}>
              <img src={distribution} width={icon_width}/>
              <h5>Distribution</h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onClick={this.change_to_field}>
              <img src={field} width={icon_width}/>
              <h5>Field</h5>
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
            <Value_Chain_Item img={field} title="Field" text="Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim"/>
          </div>

        </div>
      )
   }
}
export default Mission_Vision;
