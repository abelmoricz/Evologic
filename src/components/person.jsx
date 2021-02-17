import React from 'react';
import './person.css';


class Person extends React.Component {

   render() {

      return (
        <div className="person row my-3">
          <div className="col-md-2 image "><img src={this.props.img} width="110px"/></div>
          <div className="text-box col-md-9">
            <p><b className="purple">{this.props.name}</b> {this.props.text} </p>
          </div>
        </div>
      )

    }
}
export default Person;
