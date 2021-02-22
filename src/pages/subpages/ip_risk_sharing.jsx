import React from 'react';
import Icon_Text from '../../components/icon_text';
import Contact from '../../components/contact';
import strain from '../../assets/value_chain/strain.svg';


class Ip_Risk_Sharing extends React.Component {
   render() {
      return (
        <div className="ip_risk_sharing p-5">

          <h1 className="purple mb-5">IP/Risk Sharing</h1>
          <h3 className="purple">Description</h3>
          <p className="col-lg-10 mx-auto mb-5">Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
          tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in</p>

            <div className="col-lg-8 my-5 mx-auto">
              <Icon_Text img={strain} title="Risk Sharing" text="Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper"/>
              <Icon_Text img={strain} title="Creating Value Together" text="Pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae"/>
              <Icon_Text img={strain} title="Grant Opportunities" text="Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper"/>
            </div>

            <Contact />

        </div>
      )
   }
}
export default Ip_Risk_Sharing;
