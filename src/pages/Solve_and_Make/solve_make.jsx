import React from 'react';
import Text_Image from '../../components/text_image';
import { NavLink } from 'react-router-dom';
import Image from '../../components/image';
import Contact from '../../components/contact';

import solve from '../../assets/Solve_and_Make/we_solve.jpg';
import make from '../../assets/Solve_and_Make/we_make.jpg';

import automation from '../../assets/Solve_and_Make/automation.jpg';
import parallel from '../../assets/Solve_and_Make/parallel.jpg';
import scale_up from '../../assets/Solve_and_Make/scale_up.jpg';
import cells from '../../assets/Solve_and_Make/cells.png';

import quality from '../../assets/Solve_and_Make/quality.jpg';
import formulation from '../../assets/Solve_and_Make/formulation.JPG';
import target from '../../assets/Solve_and_Make/target.jpg';
import implementation from '../../assets/Solve_and_Make/implementation.jpg';

import json from './_content.json';
import './solve_and_make.css';


class Make extends React.Component {

   render() {
      return (
        <div className="solve_and_make mt-nav">
          <h1 className="red">SOLVE and MAKE</h1>


          <div className="row">
          {/* style={{ borderRight: 3 + "px solid #CF4C43"}} */}
            <div style={{ borderRight: 2 + "px solid #CF4C43"}} className="col-sm-6 mx-auto mt-5 px-sm-5">
              <h3 className="red">Solve</h3>

              <p className="pb-3">The core of Evologic’s competitive advantage in contract development is our technological toolbox, originating from pharma, in combination with our agility in implementation. We efficiently translate science into industrial solutions along the lines of the following 4 principles.</p>

              <Image img={parallel} addtext="1" content_title="Speed through parallelization" content={json["solve and make"]["parallel"]} text="Speed through parallelization" />
              <div className="my-4"></div>
              <Image img={automation} addtext="1" content_title="Reproducibility through automation" content={json["solve and make"]["automation"]} text="Reproducibility through automation" />
              <div className="my-4"></div>
              <Image img={scale_up} addtext="1" content_title="Scale up vs. number up" content={json["solve and make"]["scalability"]} text="Scale up vs. number up" />
              <div className="my-4"></div>
              <Image img={cells} addtext="1" content_title="Cells in focus" content={json["solve and make"]["cells"]} text="Cells in focus" />
            </div>


            <div className="col-sm-6 mx-auto mt-5 px-sm-5">
              <h3 className="red">Make</h3>
              <p className="pb-3">Even more than we enjoy a technical challenge, we enjoy the chance to MAKE your product following the highest quality standards. Using our state-of-the-art equipment park, we make your product according to your exact specifications. Intrigued? 4 great reasons to get in touch:</p>
              <Image img={quality} addtext="1" content_title="Product quality" content={json["solve and make"]["quality"]} text="Product quality" />
              <div className="my-4"></div>
              <Image img={target} addtext="1" content_title="Target definition" content={json["solve and make"]["target"]} text="Target definition" />
              <div className="my-4"></div>
              <Image img={formulation} addtext="1" content_title="Industrial encapsulation" content={json["solve and make"]["encapsulation"]} text="Industrial encapsulation" />
              <div className="my-4"></div>
              <Image img={implementation} addtext="1" content_title="Implementation" content={json["solve and make"]["implementation"]} text="Implementation" />
            </div>

          </div>

          <div className="mt-nav">
            <h3 style={{fontSize: 52 + "pt"}}>Want to learn more?</h3>
          </div>

          <div className="mt-nav"></div>
            <Contact color="#CF4C43"/>
          <div className="mb-7"></div>

        {/*
          <div className="row">
            <div className="col-md-6" ><NavLink to="/solve"><Image img={solve} text="We Solve" /></NavLink></div>
            <div className="col-md-6 mb-7" ><NavLink to="/make"><Image img={make} text="We Make" /></NavLink></div>
            <div className=" mb-5">
              <h1 className="red" >Principles</h1>
              <p className="col-sm-8 mx-auto">{json["solve and make"]['principles']}</p>
            </div>
          </div>

          <Text_Image orientation="text_left" img={automation} color="red" text={json["solve and make"]['automation']} title="Reproducibility through Automation"/>
          <hr className="red"/>
          <Text_Image orientation="text_right" img={parallel} color="red" text={json["solve and make"]['parallel']} title="Speed through Parallelization" />
          <hr className="red"/>
          <Text_Image orientation="text_left" img={scale_up} color="red" text={json["solve and make"]['scalability']} title="Scalability: Scale up vs. Number up" />
          <hr className="red"/>
          <div className="mb-10"><Text_Image orientation="text_right" text={json["solve and make"]['cells']} img={cells} color="red" title="Cells: Producers in Focus" /></div>
          */}


        </div>
      )
   }
}
export default Make;
