import React from 'react';
import Person from '../../components/person';
import News_Item from '../../components/news_item';
import { NavLink } from 'react-router-dom';

import news from './news.json';

import banner from '../../assets/Work_with_Us/banner.jpg';
import operative from '../../assets/Work_with_Us/operative.jpg';
import flag from '../../assets/flag.png';

import science1 from '../../assets/Work_with_Us/marco.png';
import science2 from '../../assets/Work_with_Us/D_Eibl.png';
import science3 from '../../assets/Work_with_Us/Norbert.png';
import science4 from '../../assets/Work_with_Us/S_Mullenr.png';
import science5 from '../../assets/Work_with_Us/placeholder.png';


class About extends React.Component {
   render() {
      return (
        <div className="about_us mt-nav">
          <h1 className="purple">About Us</h1>
          <img src={banner} width="100%"/>
          <p className="col-sm-10 mx-auto my-5">in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt
          id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non</p>

          <hr className="purple" />

          <h3 className="purple">Cooperation among Three Teams</h3>
          <p className="col-sm-10 mx-auto">in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt
          id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non</p>

          <div className="col-md-11 my-5 mx-auto row">
            <div className="col-md-4">
              <img src={operative} width="100%"/>
            </div>
            <div className="col-md-8 text_box">
              <h4 className="purple">Operative Team</h4>
              <p>Porttitor Leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper
              sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat</p>
              <div className="row mx-auto text-center" align="center">
                <div className="col-11 mx-auto">
                  <img className="m-1" src={flag} width="6%"/><img className="m-1" src={flag} width="6%"/><img className="m-1" src={flag} width="6%"/>
                  <img className="m-1" src={flag} width="6%"/><img className="m-1" src={flag} width="6%"/><img className="m-1" src={flag} width="6%"/>
                </div>
              </div>
            </div>
          </div>

          <hr className="purple" />

          <div className="col-sm-10 mx-auto">
            <h4 className="purple">Science Advisory</h4>
            <p className="col-md-8 mx-auto">in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non</p>
            <div className="m-5">
              <Person img={science1} name="Dr. Marco Giovanetti:" text=" his research on the molecular mechanisms of AMF symbiosis makes him one of the view existing experts on plant AMF interaction and AMF biochemistry"/>
              <Person img={science2} name="Prof. Dieter Eilbl:" text=" one of a few veritable experts in hairy root cultivation techniques, who has been actively involved in the development of related production technologies for industrial applications"/>
              <Person img={science3} name="Dr. Stuart Stocks:" text=" Bridging the gap between academia and industry Dr. Stocks has gathered extensive know-how in upscaling processes in the field of white biotech from 1L to >100 m3 as wells as in red biotech"/>
              <Person img={science4} name="Dr. Norbert Reichelt:" text=" As the author of over 50 scientific publications and responsible over 32 patents with his current employer, Dr. Reichelt is well experienced in the field of IP protection in a highly competitive industrial environment"/>
              <Person img={science5} name="Dr. Stefan Mullner:" text=" In his >30 y industrial carrier, at Hoechst, Aventis, Henkel, Protagen he has lead various products from bench to market and authored >100 publications."/>
            </div>
          </div>

          <hr className="purple" />

          <div className="col-sm-10 mx-auto">
            <h4 className="purple">Business Advisory</h4>
            <p className="col-md-8 mx-auto">in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non</p>
            <div className="m-5">
              <Person img={science1} name="Dr. Marco Giovanetti:" text=" his research on the molecular mechanisms of AMF symbiosis makes him one of the view existing experts on plant AMF interaction and AMF biochemistry"/>
              <Person img={science2} name="Prof. Dieter Eilbl:" text=" one of a few veritable experts in hairy root cultivation techniques, who has been actively involved in the development of related production technologies for industrial applications"/>
              <Person img={science3} name="Dr. Stuart Stocks:" text=" Bridging the gap between academia and industry Dr. Stocks has gathered extensive know-how in upscaling processes in the field of white biotech from 1L to >100 m3 as wells as in red biotech"/>
            </div>
          </div>


          <h1 className="purple">News</h1>
          <div className="m-5">
            <Top_News />
          </div>

          <div className="row mb-10"><NavLink to="/work_with_us/news" className="col-sm-2 col-4 mx-auto my-3 btn-lg btn-primary">More</NavLink></div>

        </div>
      )
   }
}

class Top_News extends React.Component {
   render() {
     const images = require.context('../../assets/news', true);

     let top_3_counter = 0;
     const news_list=news.map(news_item => {
       if(top_3_counter < 3){
        let image_path = images(`./${news_item.pic}`);
        top_3_counter = top_3_counter + 1;
          return (
            <li class="event" >
                <p className="date">{news_item.month}<br/>{news_item.year}</p>
                <News_Item title={news_item.title} text={news_item.content} img={image_path["default"].toString()}/>
            </li>
          )
        }
      })

      return (
        <div className="col-lg-8 mx-auto">
          <div id="content">
            <ul class="timeline">
              {news_list}
            </ul>
          </div>
        </div>
      )
    }
  }



export default About;
