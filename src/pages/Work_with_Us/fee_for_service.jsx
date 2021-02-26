import React from 'react';
import Contact from '../../components/contact';


class Fee_For_Service extends React.Component {
   render() {
      return (
        <div className="ip_risk_sharing p-5 mt-nav">

          <h1 className="purple mb-5">Fee for Service</h1>
          <h3 className="purple">Description</h3>
          <p className="col-lg-10 mx-auto mb-5">Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
          tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in</p>

            <div className="col-lg-10 my-5 mx-auto">
              <h4 className="purple">Risk Sharing</h4>
              <p className="col-lg-8 mx-auto mb-5">Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper</p>
              <h4 className="purple">Creating Value Together</h4>
              <p className="col-lg-8 mx-auto mb-5">Pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae</p>
              <h4 className="purple">Grant Opportunities</h4>
              <p className="col-lg-8 mx-auto mb-5">Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper</p>
            </div>
            <Contact />
        </div>
      )
   }
}
export default Fee_For_Service;
