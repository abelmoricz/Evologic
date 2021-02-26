import React from 'react';
import Text_Image from '../../components/text_image';

import hairyroots from '../../assets/grow/hairyroots.jpg';
import approach from '../../assets/grow/approach.jpg';
import dimensions from '../../assets/grow/dimensions.png';
import setup from '../../assets/grow/setup.jpg';

import './grow_plants.css';

class Plants extends React.Component {
   render() {
      return (
        <div className="mt-nav">
        <h1 className="green">Plants</h1>
          <div className="">
            <h3 className="green">Benefits of Plants</h3>
            <p className="col-sm-10 mx-auto mb-5">Mauris pellentesque pulvinar pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas maecenas
            pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis</p>

            <hr className="green"></hr>

           <h3 className="green col-sm-10 mx-auto">Improvements in the DEVELOPMENT Process</h3>

           <Text_Image orientation="text_right" img={hairyroots} color="green" title="Introduction to Hairy Roots"/>
           <hr className="green"/>
           <Text_Image orientation="text_left" img={approach} color="green" title="Development Approach"/>
           <hr className="green"/>
           <Text_Image orientation="text_right" img={dimensions} color="green" title="Ideal Reactor Dimensions"/>
           <hr className="green"/>
           <Text_Image orientation="text_left" img={setup} color="green" title="Development of Reactor Setup"/>
           </div>

           <hr className="green"></hr>

           <h1 className="green mb-5">Our Project: InnCoCell</h1>
           <h3 className="green mx-auto">Growing AMF(Arbuscular Mycorrhizal Fungi) Better</h3>
           <p className="col-sm-8 mx-auto mb-5">Enim nec dui nunc mattis enim ut tellus elementum sagittis
           vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit
           cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
            sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus</p>
            <h3 className="green mx-auto">Better Plants Extracts</h3>
            <p className="col-sm-8 mx-auto mb-10">Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed
            faucibus turpis</p>



        </div>
      )
   }
}
export default Plants;
