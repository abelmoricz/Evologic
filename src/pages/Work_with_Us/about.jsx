import React from 'react';
import Person from '../../components/person';
import News_Item from '../../components/news_item';
import { NavLink } from 'react-router-dom';

import news from './news.json';

import banner from '../../assets/Work_with_Us/banner.jpg';
import operative from '../../assets/Work_with_Us/operative.jpg';

import us from '../../assets/Work_with_Us/us.jpg';
import spain from '../../assets/Work_with_Us/spain.png';
import russia from '../../assets/Work_with_Us/russia.png';
import iran from '../../assets/Work_with_Us/iran.png';
import polish from '../../assets/Work_with_Us/polish.jpg';

import science1 from '../../assets/Work_with_Us/marco.png';
import science2 from '../../assets/Work_with_Us/D_Eibl.png';
import science3 from '../../assets/Work_with_Us/Norbert.png';
import science4 from '../../assets/Work_with_Us/S_Mullenr.png';
import science5 from '../../assets/Work_with_Us/placeholder.png';

import business1 from '../../assets/Work_with_Us/rolf.png';
import business2 from '../../assets/Work_with_Us/hans.png';
import business3 from '../../assets/Work_with_Us/peter.png';

import down from '../../assets/down.svg';
import up from '../../assets/up.svg';

import json from './_content.json';

import './about.css';

const imagesPath = {
  down: down,
  up: up
}


class About extends React.Component {
  state = {
    open_1: true,
    open_2: true
  }
  toggleImage_1 = () => {
    this.setState(state => ({ open_1: !state.open_1 }))
  }
  toggleImage_2 = () => {
    this.setState(state => ({ open_2: !state.open_2 }))
  }

  getImageName_1 = () => this.state.open_1 ? 'down' : 'up'
  getImageName_2 = () => this.state.open_2 ? 'down' : 'up'


   render() {
     const imageName_1 = this.getImageName_1();
     const imageName_2 = this.getImageName_2();

     const flag_width = "8%";
      return (
        <div className="about_us mt-nav">
          <h1 className="purple">About Us</h1>
          <img src={banner} width="100%"/>
          <p className="col-sm-10 mx-auto my-5">{json['about us page']['banner caption']}</p>

          <hr className="purple" />
          <h3 className="purple">Our Roots in Academia</h3>
          <p className="col-sm-10 mx-auto">{json['about us page']['academic roots']}</p>
          <hr className="purple" />
          <h3 className="purple">Cooperation among Three Teams</h3>
          <p className="col-sm-10 mx-auto">{json['about us page']['3 teams']}</p>

          <div className="col-md-11 my-5 mx-auto row">
            <div className="col-md-4">
              <img src={operative} width="100%"/>
            </div>
            <div className="col-md-8 text_box">
              <h4 className="purple">Operative Team</h4>
              <p>{json['about us page']['operative']}</p>

              <div className="row mx-auto text-center" align="center">
                <div className="col-11 mx-auto">
                  <img className="m-1" src={us} width={flag_width}/><img className="m-1" src={spain} width={flag_width}/><img className="m-1 border" src={russia} width={flag_width}/>
                  <img className="m-1" src={iran} width={flag_width}/><img className="m-1 border" src={polish} width={flag_width}/>
                </div>
              </div>
            </div>
          </div>

          <hr className="purple" />




          <div className="col-sm-10 mx-auto">
            <h4 className="purple">Science Advisory</h4>
            <p className="col-md-8 mx-auto">{json['about us page']['science']}</p>

            <p ><img src={imagesPath[imageName_1]} onClick={this.toggleImage_1} id="down" align="center" width="50" data-bs-toggle="collapse" data-bs-target="#business" aria-expanded="false" aria-controls="business" /></p>

            <div class="collapse" id="business">
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
            <p className="col-md-8 mx-auto">{json['about us page']['business']}</p>

            <p ><img src={imagesPath[imageName_2]} onClick={this.toggleImage_2} id="down" align="center" width="50" data-bs-toggle="collapse" data-bs-target="#science" aria-expanded="false" aria-controls="science" /></p>
            <div class="collapse" id="science">
              <Person img={business1} name="Dr. Rolf Witte:" text=" As an experienced entrepreneur and CEO/CFO of various companies (Neuraxo Pharmaceuticals, Contract Medical International, PSites Pharma, Bert Energy GmbH) his key expertise lies in finance and biotech evaluations. Dr. Witte has background as a lawyer and auditor and has a strong track record of arranging financing rounds"/>
              <Person img={business2} name="Dr. Hans Bodingbauer:" text=" with his strong international industrial (Agro Linz, DuPont, BayWa) background in product development (agrochemicals) and controlling, Dr. Bodingbauer was a successful entrepreneur (Netragon AG) and is leading the business development sounding board of Evologic Technologies"/>
              <Person img={business3} name="Dr. Peter Innes :" text=" During his time as Chief Executive Officer, Becker Underwood was acquired by BASF in 2012. Prior to this exit, he successfully expanded the company expanded from a single facility business in Iowa to a global company with operations on five continents. Prior to joining Becker Underwood, Peter was Group Managing Director of The MicroBio Group Limited, a manufacturer of bio-fertilizers and crop protection products that was acquired by Becker Underwood in 2000"/>
            </div>
          </div>

          <hr className="purple" />

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
     const images = require.context('../../assets/Work_with_Us/news', true);

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
        <div className="col-lg-9 mx-auto">
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
