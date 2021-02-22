import React from 'react';
import { NavLink } from 'react-router-dom';

import News_Item from '../../components/news_item';
import './news.css';
import news from './news.json';



class News extends React.Component {


   render() {

     const images = require.context('../../assets/news', true);

     const news_list=news.map(news_item => {
        let image_path = images(`./${news_item.pic}`);

          return (
            <li class="event" >
                <p className="date">{news_item.month}<br/>{news_item.year}</p>
                <News_Item title={news_item.title} text={news_item.content} img={image_path["default"].toString()}/>
            </li>
          )
        })

      return (
        <div className="mb-10">

        <h1 className="purple mb-4">News</h1>
        <div className="row">

          <div className="col-lg-8 mx-auto">

                  <div id="content">
                      <ul class="timeline">
                          {news_list}
                      </ul>
                  </div>

          </div>


          <div className="col-lg-4">
            <h3 className="purple">For Journalists</h3>
            <p className="col-sm-8 mx-auto">A iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque</p>
            <div className="row"><NavLink to="/work_with_us/ip_sharing" className="col-sm-2 col-4 mx-auto my-3 btn-lg btn-primary">More</NavLink></div>
          </div>
        </div>


      </div>
      )
   }
}
export default News;
