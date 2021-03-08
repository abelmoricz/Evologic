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
          <h3 className="">“Make science based biologicals economically feasible”</h3>
          <p className="mb-5 mx-auto col-sm-10">Biologicals comprise a tremendous potential when it comes to sustainability. However, the efficiency in translating well researched biologicals into economic feasible products has been very poor in the last decades. Evologic´s mission is to overcome the challenges associated to biologicals and to translate the underlying science in econonomically feasible products to change the world for the better. </p>

          <div className="row mt-5 mb-7">
            <div className="col-md-3"><Image img={goal2} addtext="1" content_title="Zero hunger" content={json["un goals"]["2"]} text={<img src={w_goal2} />}/></div>
            <div className="col-md-3"><Image img={goal6} addtext="1" content_title="Clean water and sanitation" content={json["un goals"]["6"]} text={<img src={w_goal6} />}/></div>
            <div className="col-md-3"><Image img={goal12} addtext="1" content_title="Responsible consumption and production" content={json["un goals"]["12"]} text={<img src={w_goal12} />}/></div>
            <div className="col-md-3"><Image img={goal15} addtext="1" content_title="Life on land" content={json["un goals"]["15"]} text={<img src={w_goal15} />}/></div>
          </div>


          <h1 className="brown">VISION</h1>
          <h3 className="">“Supply best in class biologicals to the industry”</h3>
          <p className="mb-7 mx-auto col-sm-10">Market adoption of biologicals is fueled by reproducibility and applicability. Both characteristics are closely linked to product quality. Now we, at Evologic, believe that 1) product quality is defined during production and 2) conserved during formulation. Combining the best technologies in one, flexible, collaborative value chain is the foundation of our vision to supply best in class biologicals to the industry. </p>

          <h1 id="value_chain" href="#value_chain" className="py-5 brown ">Value Chain</h1>

          <div className="d-sm-block d-none ">
          <div className="row value_chain col-lg-11 mx-auto" align="middle">
            <div className="vc_item col-md px-0" onMouseEnter={this.change_to_strain}>
              <img src={strain} width={icon_width} />
              <h5><b>Strain</b></h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onMouseEnter={this.change_to_production}>
              <img src={production} width={icon_width + 20}/>
              <h5><b>Production</b></h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onMouseEnter={this.change_to_formulation}>
              <img src={formulation} width={icon_width + 20}/>
              <h5><b>Formulation</b></h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onMouseEnter={this.change_to_application}>
              <img src={application} width={icon_width}/>
              <h5><b>Application</b></h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onMouseEnter={this.change_to_distribution}>
              <img src={distribution} width={icon_width}/>
              <h5><b>Distribution</b></h5>
            </div>
            <img src={arrow} className="arrow"/>
            <div className="vc_item col-md px-0" onMouseEnter={this.change_to_field}>
              <img src={field} width={icon_width}/>
              <h5><b>Field</b></h5>
            </div>
          </div>
          </div>

          <div className=" d-sm-flex d-none row mt-5 mb-7" align="center">
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
            <Value_Chain_Item img={strain} title="Strain" text={json["vc"]["strain"]}/>
            <Value_Chain_Item img={production} title="Production" text={json["vc"]["production"]}/>
            <Value_Chain_Item img={formulation} title="Formulation" text={json["vc"]["formulation"]}/>
            <Value_Chain_Item img={application} title="Application" text={json["vc"]["application"]}/>
            <Value_Chain_Item img={distribution} title="Distribution" text={json["vc"]["distribution"]}/>
            <Value_Chain_Item img={field} title="Field" text={json["vc"]["field"]}/>
          </div>

        </div>
      )
   }
}
export default Mission_Vision;
