import React from 'react';
import './solve_make.css';
import Text_Image from '../components/text_image';
import { NavLink } from 'react-router-dom';
import Image from '../components/image';
import solve from '../assets/we_solve.jpg';
import make from '../assets/we_make.jpg';


class Make extends React.Component {



   render() {
     var orientation = "text_right";
     if (window.innerWidth <= 769){ //bootstrap 768 md breakpoint
      orientation = "text_left";
      console.log("window is small");
     }
      return (
        <div>
          <h1 className="red" >SOLVE and MAKE</h1>
          <div className="row">
            <div className="col-md-6" ><NavLink to="/solve_and_make/solve"><Image img={solve} text="We Solve" /></NavLink></div>
            <div className="col-md-6" ><NavLink to="/solve_and_make/make"><Image img={make} text="We Make" /></NavLink></div>
          <div className="mt-10 mb-5">
            <h1 className="red" >Principles</h1>
            <p className="col-8 offset-2">Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus</p>
          </div>

          </div>
          <Text_Image orientation="text_left" color="red" title="Reproduction through Automation"/>
          <Text_Image orientation={orientation} color="red" title="Speed through Parallelization" />
          <Text_Image orientation="text_left" color="red" title="Scalability: Scale up vs. Number up" />
          <Text_Image orientation={orientation} color="red" title="Cells: Producers in Focus" />
        </div>
      )
   }
}
export default Make;
