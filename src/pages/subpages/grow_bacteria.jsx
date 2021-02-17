import React from 'react';
import './grow_bacteria.css';

import bg from '../../assets/grow/bg_bacteria.jpg';

class Bacteria extends React.Component {
   render() {
      return (
        <div className="grow_bacteria">
          <h3 className="m-5 green">Benefits of Bacteria</h3>
          <p className="m-5">Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere
          morbi leo urna molestie at elementum eu facilisis</p>

          <h1 className="green">Rhizobia</h1>
          <div className="bg pb-5">
            <div className="m-5 col-lg-6 col-xl-7">
              <h3 className=" green">Description</h3>
              <p className="">id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam
              tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis
              enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam
              vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget</p>
              </div>
               <h3 className="green col-lg-6">Improvements</h3>
               <div className="m-5 col-lg-5">
                 <h4 className="green">Productivity</h4>
                 <p className="">Enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam
                 nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet
                 nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes
                 nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas
                 accumsan lacus</p>
                </div>
              <div className="m-5 col-lg-8 col-xl-5">
               <h4 className="green">Space Time Yield</h4>
               <p className="">Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque
               viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis</p>
              </div>
            </div>
        </div>
      )
   }
}
export default Bacteria;
