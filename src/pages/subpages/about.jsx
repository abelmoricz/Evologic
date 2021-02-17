import React from 'react';
import Person from '../../components/person';
import News from '../../components/news';

import banner from '../../assets/work_with_us/banner.jpg';
import operative from '../../assets/work_with_us/operative.jpg';

import science1 from '../../assets/work_with_us/marco.png';
import science2 from '../../assets/work_with_us/D_Eibl.png';
import science3 from '../../assets/work_with_us/Norbert.png';
import science4 from '../../assets/work_with_us/S_Mullenr.png';
import science5 from '../../assets/work_with_us/placeholder.png';

import './about.css'

class About extends React.Component {
   render() {
      return (
        <div className="about_us">
          <h1 className="purple">About Us</h1>
          <img src={banner} width="100%"/>
          <p className="m-5">in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt
          id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non</p>

          <h3 className="purple">Cooperation among Three Teams</h3>
          <p className="m-5">in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt
          id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non</p>

          <div className="m-5 row">
            <div className="col-md-4">
              <img src={operative} width="100%"/>
            </div>
            <div className="col-md-8 text-box">
              <h4 className="purple">Operative Team</h4>
              <p>Porttitor Leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper
              sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat</p>
            </div>
          </div>

          <hr className="purple" />

          <div className="m-5">
            <h4 className="purple">Science Advisory</h4>
            <p className="offset-md-2 col-md-8 ">in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non</p>
            <div className="m-5">
              <Person img={science1} name="Dr. Marco Giovanetti:" text=" his research on the molecular mechanisms of AMF symbiosis makes him one of the view existing experts on plant AMF interaction and AMF biochemistry"/>
              <Person img={science2} name="Prof. Dieter Eilbl:" text=" one of a few veritable experts in hairy root cultivation techniques, who has been actively involved in the development of related production technologies for industrial applications"/>
              <Person img={science3} name="Dr. Stuart Stocks:" text=" Bridging the gap between academia and industry Dr. Stocks has gathered extensive know-how in upscaling processes in the field of white biotech from 1L to >100 m3 as wells as in red biotech"/>
              <Person img={science4} name="Dr. Norbert Reichelt:" text=" As the author of over 50 scientific publications and responsible over 32 patents with his current employer, Dr. Reichelt is well experienced in the field of IP protection in a highly competitive industrial environment"/>
              <Person img={science5} name="Dr. Stefan Mullner:" text=" In his >30 y industrial carrier, at Hoechst, Aventis, Henkel, Protagen he has lead various products from bench to market and authored >100 publications."/>
            </div>
          </div>

          <hr className="purple" />

          <div className="m-5">
            <h4 className="purple">Business Advisory</h4>
            <p className="offset-md-2 col-md-8 ">in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non</p>
            <div className="m-5">
              <Person img={science1} name="Dr. Marco Giovanetti:" text=" his research on the molecular mechanisms of AMF symbiosis makes him one of the view existing experts on plant AMF interaction and AMF biochemistry"/>
              <Person img={science2} name="Prof. Dieter Eilbl:" text=" one of a few veritable experts in hairy root cultivation techniques, who has been actively involved in the development of related production technologies for industrial applications"/>
              <Person img={science3} name="Dr. Stuart Stocks:" text=" Bridging the gap between academia and industry Dr. Stocks has gathered extensive know-how in upscaling processes in the field of white biotech from 1L to >100 m3 as wells as in red biotech"/>
            </div>
          </div>


          <h1 className="purple">News</h1>
          <div className="m-5">
            <News></News>
          </div>

        </div>
      )
   }
}
export default About;
