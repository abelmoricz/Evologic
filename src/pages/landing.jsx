import React from 'react';

import goal2 from '../assets/_Misc/UN/goal-2-bg.jpg';
import w_goal2 from '../assets/_Misc/UN/white-2-shadow.png';
import goal6 from '../assets/_Misc/UN/goal-6-bg.jpg';
import w_goal6 from '../assets/_Misc/UN/white-6-shadow.png';
import goal12 from '../assets/_Misc/UN/goal-12-bg.jpg';
import w_goal12 from '../assets/_Misc/UN/white-12-shadow.png';
import goal15 from '../assets/_Misc/UN/goal-15-bg.jpg';
import w_goal15 from '../assets/_Misc/UN/white-15-shadow.png';

import plants from '../assets/_Misc/plant.jpg';
import bacteria from '../assets/_Misc/bacteria.jpg';
import fungi from '../assets/_Misc/fungi.jpg';

import strain from '../assets/_Misc/value_chain/strain.svg';
import production from '../assets/_Misc/value_chain/production.svg';
import formulation from '../assets/_Misc/value_chain/formulation.svg';
import application from '../assets/_Misc/value_chain/application.svg';
import distribution from '../assets/_Misc/value_chain/distribution.svg';
import field from '../assets/_Misc/value_chain/field.svg';
import arrow from '../assets/_Misc/value_chain/arrow.svg';

import Image from '../components/image';
import Carousel from '../components/carousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HashLink } from 'react-router-hash-link';


import json from './_content.json';
import j from './Mission_and_Vision/_content.json';
import './landing.css';
import { NavLink } from "react-router-dom";



class Landing extends React.Component {



   render() {
     const handleDragStart = (e) => e.preventDefault();


     const images = require.context('../assets/Other Logos', true);

     const supporters_list=json['supporter logos'].map(news_item => {
        let image_path = images(`./${news_item}`);
        return (
          <div className=" d-flex">
             <img style={{zIndex: -1}} className="mx-auto" src={image_path["default"].toString()} height="90"/>
          </div>
            )
      })
      const investor_list=json['investor logos'].map(news_item => {
         let image_path = images(`./${news_item}`);
         return (
            <div className=" d-flex">
               <img style={{zIndex: -1}} className="mx-auto" src={image_path["default"].toString()} height="70"/>
            </div>
             )
       })

       const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


       const Gallery = () => {
         return (
           <AliceCarousel
              mouseTracking="true"
              items={investor_list}
              responsive={responsive}
              animationDuration="2500"
              autoPlayInterval="2900"
              disableDotsControls="true"
              autoPlay="true"
              disableButtonsControls="true"
              infinite="true"
          />
         );
       }
       const Supporter_Gallery = () => {
         return (
           <AliceCarousel
              mouseTracking="true"
              items={supporters_list}
              responsive={responsive}
              animationDuration="2500"
              autoPlayInterval="3100"
              disableDotsControls="true"
              autoPlay="true"
              disableButtonsControls="true"
              infinite="true"
          />
         );
       }

     const icon_width = 160;
      return (
        <div className=" landing pt-5">
        {/*
          <div className="hr_bg">
            <h1 className='title col-sm-11 mx-auto '>Grow Different</h1>
          </div>
          */}

          {/*Mission Section*/}
          <div className="">
          <h1 className='brown col-sm-11 mx-auto '>MISSION</h1>
          <h3 className=' mx-auto '>“Make science based biologicals economically feasible”</h3>
          </div>

          <h4 className="mt-3"> In furtherance of the <a id="un" href="https://sdgs.un.org/goals">United Nations Sustainability Development Goals</a> </h4>
          <div className="row mb-3">
          <div className="col-md-3"><Image img={goal2} addtext="1" content_title="Zero hunger" content={j["un goals"]["2"]} text={<img src={w_goal2} />}/></div>
          <div className="col-md-3"><Image img={goal6} addtext="1" content_title="Clean water and sanitation" content={j["un goals"]["6"]} text={<img src={w_goal6} />}/></div>
          <div className="col-md-3"><Image img={goal12} addtext="1" content_title="Responsible consumption and production" content={j["un goals"]["12"]} text={<img src={w_goal12} />}/></div>
          <div className="col-md-3"><Image img={goal15} addtext="1" content_title="Life on land" content={j["un goals"]["15"]} text={<img src={w_goal15} />}/></div>
          </div>

      <div className="py-5"></div>



          <h3 className="mb-5"><b>Fully invested in our Mission</b></h3>
          <div className="col-10 mx-auto mb-5"><Gallery /></div>



          <h3 className="mb-5"><b>Supported by</b></h3>
          <div className="col-10 mx-auto"><Supporter_Gallery /></div>
          <h3 className="pt-5"><b></b></h3>

          {/*Solve and Make Section*/}
          <div className="mt-10">
            <NavLink to="/solve_and_make"><h1 className="red"> {json["solve and make"]["title"]} </h1></NavLink>
            <div className="col-sm-10 mx-auto">
            <p className=""> {json["solve and make"]["content"]} </p>
            <div className="row text-center mx-auto">
              <div className="col-md-3 mx-auto">
                <NavLink to="/solve_and_make"><h1> {json["solve and make"]["stat1 title"]} </h1>
                <h5> {json["solve and make"]["stat1 content"]} </h5></NavLink>
              </div>
              <div className="col-md-3 mx-auto">
                <NavLink to="/solve_and_make"><h1>{json["solve and make"]["stat2 title"]}</h1>
                <h5>{json["solve and make"]["stat2 content"]}</h5></NavLink>
              </div>
              <div className="col-md-3 mx-auto">
                <NavLink to="/solve_and_make"><h1>{json["solve and make"]["stat3 title"]}</h1>
                <h5>{json["solve and make"]["stat3 content"]}</h5></NavLink>
              </div>

              </div>

            </div>
          </div>


          {/*

          <div className="row">
            <div className="col-lg-6 text_box">
              <NavLink to="/grow"><h1 className="green"> {json["grow different"]["title"]} </h1></NavLink>
              <p className="px-5"> {json["grow different"]["content"]} </p>
            </div>
            <div className="col-lg-6"><NavLink to="/fungi"><Image text="Fungi" img={fungi} /></NavLink></div>
          </div>
          <div className="row">
            <div className="col-lg-6"><NavLink to="/bacteria"><Image text="Bacteria" img={bacteria} /></NavLink></div>
            <div className="col-lg-6"><NavLink to="/plants"><Image text="Plants" img={plants} /></NavLink></div>
          </div>
          */}

          {/*Grow Section Alternative*/}
          <div className="mt-10">
            <NavLink to="/grow"><h1 className="green"> {json["grow different"]["title"]} </h1></NavLink>
            <div className="col-sm-10 mx-auto">
              <p className=""> {json["grow different"]["content"]} </p>
            </div>
          </div>

          <div className="col-sm-10 mx-auto">
            <div className="row">
              <div className="col-md-4">
                <Image text="Fungi" img={fungi} addtext="1"  content={json["grow different"]['fungi']}/>
              </div>
              <div className="col-md-4">
                <Image text="Bacteria" img={bacteria} addtext="1"  content={json["grow different"]['bacteria']}/>
              </div>
              <div className="col-md-4 mr-auto">
                <Image text="Plants" img={plants} addtext="1"  content={json["grow different"]['plants']}/>
              </div>
            </div>

            </div>






          {/*Work with us Section*/}
          <div className="mt-10">
            <NavLink to="/work_with_us"><h1 className="purple py-5"> {json["work with us"]["title"]} </h1></NavLink>
            <p className="col-sm-8 mx-auto"> {json["work with us"]["content"]} </p>
            <h3 className="py-5">Value Chain</h3>
            <div className="row value_chain col-lg-11 mx-auto" align="middle">
              <HashLink to="/mission#value_chain" className="col-md">
                <img src={strain} width={icon_width} align="center"/>
                <h5><b>Strain</b></h5>
              </HashLink>
              <img className="arrow" src={arrow} />
              <HashLink hash to="/mission#value_chain" className="col-md">
                <img src={production} width={icon_width + 20}/>
                <h5><b>Production</b></h5>
              </HashLink>
              <img src={arrow} className="arrow"/>
              <HashLink to="/mission#value_chain"  class="col-md">
                <img src={formulation} width={icon_width + 20}/>
                <h5><b>Formulation</b></h5>
              </HashLink>
              <img src={arrow} className="arrow"/>
              <HashLink to="/mission#value_chain"  className="col-md">
                <img src={application} width={icon_width}/>
                <h5><b>Application</b></h5>
              </HashLink>
              <img src={arrow} className="arrow"/>
              <HashLink to="/mission#value_chain"  class="col-md">
                <img src={distribution} width={icon_width}/>
                <h5><b>Distribution</b></h5>
              </HashLink>
              <img src={arrow} className="arrow"/>
              <HashLink to="/mission#value_chain"  class="col-md">
                <img src={field} width={icon_width}/>
                <h5><b>Field</b></h5>
              </HashLink>
            </div>
            {/*BUTTON*/}
            <div className="row">
            <NavLink to="/mission" style={{backgroundColor: "#433166", marginTop: 5 +"%"}} class="mb-7 col-sm-1 col-3 mx-auto btn-lg btn-primary">More</NavLink>
            </div>
          </div>

        </div> //end landing
      )
   }
}



export default Landing;
