import React from 'react'
import { Navbar,Nav  } from 'react-bootstrap';



class Icon_Text extends React.Component {

   render() {

      return (
        <div className="row my-5">

          <div className="col-sm-2 text_box"><img src={this.props.img} width="100%"/></div>
          <div className="col-sm text_box">
            <h4 style={{fontSize: 24 + 'pt'}} className="purple">{this.props.title}</h4>
            <p >{this.props.text}</p>
          </div>

        </div>
      )

   }
}
export default Icon_Text;
