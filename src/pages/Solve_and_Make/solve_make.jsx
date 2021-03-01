import React from 'react';
import Text_Image from '../../components/text_image';
import { NavLink } from 'react-router-dom';
import Image from '../../components/image';

import solve from '../../assets/Solve_and_Make/we_solve.jpg';
import make from '../../assets/Solve_and_Make/we_make.jpg';

import automation from '../../assets/Solve_and_Make/automation.jpg';
import parallel from '../../assets/Solve_and_Make/parallel.jpg';
import scale_up from '../../assets/Solve_and_Make/scale_up.jpg';
import cells from '../../assets/Solve_and_Make/cells.png';

import json from './_content.json';


class Make extends React.Component {

   render() {
      return (
        <div className="mt-nav">
          <h1 className="red" >SOLVE and MAKE</h1>

          <div className="row">
            <div className="col-md-6" ><NavLink to="/solve"><Image img={solve} text="We Solve" /></NavLink></div>
            <div className="col-md-6" ><NavLink to="/make"><Image img={make} text="We Make" /></NavLink></div>
            <div className="mt-10 mb-5">
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
        </div>
      )
   }
}
export default Make;
