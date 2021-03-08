import React from 'react';
import Contact from '../../components/contact';
import ScrollToTop from '../../components/scrollToTop';

class Wall extends React.Component {

   render() {
      return (
        <div className="about_us mt-nav">
          <ScrollToTop />

          <p>Please fill out the Contact form to explor our technology in more detail</p>
          <Contact />



        </div>
      )
   }
}





export default Wall;
