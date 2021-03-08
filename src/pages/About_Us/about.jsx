import React from 'react';
import Person from '../../components/person';
import News_Item from '../../components/news_item';
import Image from '../../components/image';
import { NavLink } from 'react-router-dom';
import News_Page from './news_page';

import news from './news.json';

import banner from '../../assets/Work_with_Us/banner.jpg';
import operative from '../../assets/Work_with_Us/operative.jpg';

import us from '../../assets/Work_with_Us/us.png';
import spain from '../../assets/Work_with_Us/spain.png';
import russia from '../../assets/Work_with_Us/russia.png';
import afgan from '../../assets/Work_with_Us/afgan.png';
import polish from '../../assets/Work_with_Us/Poland.png';
import france from '../../assets/Work_with_Us/France.png';
import philippines from '../../assets/Work_with_Us/philippines.png';
import portugal from '../../assets/Work_with_Us/Portugal.png';
import germany from '../../assets/Work_with_Us/Germany.png';
import turkey from '../../assets/Work_with_Us/turkey.png';

import science1 from '../../assets/Work_with_Us/marco.png';
import science2 from '../../assets/Work_with_Us/D_Eibl.png';
import science3 from '../../assets/Work_with_Us/Norbert.png';
import science4 from '../../assets/Work_with_Us/S_Mullenr.png';
import science5 from '../../assets/Work_with_Us/placeholder.png';

import business1 from '../../assets/Work_with_Us/rolf.png';
import business2 from '../../assets/Work_with_Us/hans.png';
import business3 from '../../assets/Work_with_Us/peter.png';
import baywa from '../../assets/Other Logos/baywa.jpg';
import eu from '../../assets/Other Logos/European_Commission.png';

import logo1 from '../../assets/Other Logos/I2C.jpg';
import logo2 from '../../assets/Other Logos/TU-Wien-Logo.jpg';
import logo3 from '../../assets/Other Logos/inits.jpg';

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

     const images = require.context('../../assets/Other Logos', true);

     const supporters_list=json['supporter logos'].map(news_item => {
        let image_path = images(`./${news_item}`);
        return (
              <div className="my-5">
             <Image img={image_path["default"].toString()} />
             </div>
            )
      })
      const investor_list=json['investor logos'].map(news_item => {
         let image_path = images(`./${news_item}`);
         return (
            <div className="my-5">
               <Image img={image_path["default"].toString()}/>
               </div>
             )
       })

     const flag_width = "6%";
     const logo_width = "15%";
      return (
        <div className="about_us mt-nav">
          <h1 className="purple">About US</h1>
          <img src={banner} width="100%"/>
          <p className="col-sm-11 mx-auto my-5">{json['about us page']['banner caption']}</p>
          <div className="col" align="middle">
            <img className="m-2 border" src={us} width={flag_width}/>
            <img className="m-2" src={germany} width={flag_width}/>
            <img className="m-2 border" src={russia} width={flag_width}/>
            <img className="m-2" src={portugal} width={flag_width}/>
            <img className="m-2" src={spain} width={flag_width}/>
            <img className="m-2 border" src={polish} width={flag_width}/>
            <img className="m-2" src={afgan} width={flag_width}/>
            <img className="m-2 border" src={philippines} width={flag_width}/>
            <img className="m-2 border" src={france} width={flag_width}/>
            <img className="m-2 border" src={turkey} width={flag_width}/>
          </div>


          <hr className="purple" />
          <h3 className="purple">Our roots in academia</h3>
          <p className="col-sm-10 mx-auto">{json['about us page']['academic roots']}</p>
          <div className="col" align="middle">
            <img className="mx-5 " src={logo2} width={logo_width}/>
            <img className="mx-5" src={logo1} width={logo_width}/>
            <img className="mx-5 " src={logo3} width={logo_width}/>
          </div>

          <hr className="purple" />
          <h3 className="purple">Cooperation among three teams</h3>
          <p className="col-sm-10 mx-auto">{json['about us page']['3 teams']}</p>

          <div className="col-md-11 my-5 mx-auto row">
            <div className="operative_img col-md-4">
              <img className="" src={operative} width="100%"/>
            </div>
            <div className="col-md-8 text_box">
              <h4 className="purple">Operative Team</h4>
              <p>{json['about us page']['operative']}</p>

              <div className="row mx-auto text-center" align="center">

              </div>
            </div>
          </div>

          <hr className="purple" />




          <div className="col-sm-10 mx-auto">
            <h4 className="purple">Science Advisory Board</h4>
            <p className="col-md-10 mx-auto">{json['about us page']['science']}</p>

            <p ><img className="pointer" src={imagesPath[imageName_1]} onClick={this.toggleImage_1} id="down" align="center" width="50" data-bs-toggle="collapse" data-bs-target="#business" aria-expanded="false" aria-controls="business" /></p>

            <div class="collapse" id="business">
                  <Person img={science1} name="Dr. Marco Giovanetti's" text=" comprehensive background in plant biotechnology and his research on the molecular mechanisms of AMF symbiosis makes him one of the view existing experts on plant/AMF interaction and AMF biochemistry. His input is especially valuable for the advancements of AMF analytics and general product quality aspects."/>
                  <Person img={science2} name="Prof. Dieter Eilbl " text="is one of a few veritable experts in hairy root cultivation techniques, who has been actively involved in the development of related production technologies for industrial applications. As head of the Competence Center for Biochemical Engineering and Cell Cultivation Technique of the ICBT and head of the working group Biochemical Engineering at the ZHAW he is supporting Evologic with his extensive know-how in hairy root handling and processing."/>

                  <Person img={science3} name="Dr. Norbert Reichelt," text=" as the author of over 50 scientific publications and responsible over 32 patents with his current employer, Dr. Reichelt is well experienced in the field of IP protection in a highly competitive industrial environment. In the more recent past, Dr. Reichelt has been occupied with technology scouting and identification and consequent management of strategic technology projects. Today he is responsible for New Business Concepts, Technology evaluation for large-scale investments >600 Mio. In this board, Dr. Reichelt constitutes the key source of expertise for strategic decisions regarding IP protection and licensing."/>

                  <Person img={science5} name="Dr. Stuart Stocks," text=" bridging the gap between academia and industry Dr. Stocks has gathered extensive know-how in upscaling processes in the field of white biotech from 1L to >100 m3 as wells as in red biotech. His legacy is the successful development of the production process for cellulases used for 2. Gen ethanol production. Dr. Stocks is specifically experienced in the field of aeration, agitation, and impeller design as well as in process development, making him the key source of know-how regarding reactor design and upscaling challenges."/>
          </div>


        </div>

          <hr className="purple" />

          <div className="col-sm-10 mx-auto">
            <h4 className="purple">Business Advisory Board</h4>
            <p className="col-md-10 mx-auto">{json['about us page']['business']}</p>

            <p ><img className="pointer" src={imagesPath[imageName_2]} onClick={this.toggleImage_2} id="down" align="center" width="50" data-bs-toggle="collapse" data-bs-target="#science" aria-expanded="false" aria-controls="science" /></p>
            <div class="collapse" id="science">
              <Person img={business1} name="Dr. Rolf Witte" text=", as an experienced entrepreneur and CEO/CFO of various companies (Neuraxo Pharmaceuticals, Contract Medical International, PSites Pharma, Bert Energy GmbH) his key expertise lies in finance and biotech evaluations. Dr. Witte has background as a lawyer and auditor and has a strong track record of arranging financing rounds. "/>
              <Person img={business2} name="Dr. Hans Bodingbauer" text=" with his strong international industrial (Agro Linz, DuPont, BayWa) background in product development (agrochemicals) and controlling, Dr. Bodingbauer was a successful entrepreneur (Netragon AG) and is leading the business development sounding board of Evologic Technologies. "/>
              <Person img={business3} name="Dr. Peter Innes" text=" during his time as Chief Executive Officer, Becker Underwood was acquired by BASF in 2012. Prior to this exit, he successfully expanded the company expanded from a single facility business in Iowa to a global company with operations on five continents. Prior to joining Becker Underwood, Peter was Group Managing Director of The MicroBio Group Limited, a manufacturer of bio-fertilizers and crop protection products that was acquired by Becker Underwood in 2000. "/>
            </div>
          </div>

          <hr className="purple" />

          <div className="col-sm-8 mx-auto">
            <div className="row">
              <div className="col-sm-6">
                <h3 className="purple">Supporters</h3>
                <div className=" d-flex justify-content-center"><img src={eu} width="50%"/></div>
                <div className="col-sm-4 mx-auto">

                  {supporters_list}
                </div>
              </div>

              <div className="col-sm-6">
                <h3 className="purple">Investors</h3>
                <div className="col-sm-4 mx-auto">
                  {investor_list}
                  <div className="d-flex justify-content-center"><img src={baywa} width="50%"/></div>
                </div>
              </div>

            </div>
          </div>

          <hr className="purple" />

          <Top_News />
          <div className="mb-7"></div>



        </div>
      )
   }
}

class Top_News extends React.Component {
   render() {
     const images = require.context('../../assets/Work_with_Us/news', true);

     let top_3_counter = 0;
     const news_list=news.map(news_item => {
       if(top_3_counter < 10){
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
        <h1 className="purple">News</h1>
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
