import React from 'react';
import './person.css';


class Person extends React.Component {
  constructor () {
    super()
    this.state = { isHidden: true }
  }
  toggleHidden () {
    this.setState({ isHidden: !this.state.isHidden })
  }


   render() {

      return (
        <div className="person row my-3 ">
          <div className="col-md-2 image">
            <img onClick={this.toggleHidden.bind(this)} src={this.props.img} width="110px"/>

            <div className="d-sm-none d-block text-center">
              <h5 className="purple">{this.props.name}</h5>
              {!this.state.isHidden && <Description name={this.props.name} text={this.props.text} />}
            </div>

          </div>

          <div className="text_box col-md-9 d-sm-flex d-none">
            <p><b className="purple">{this.props.name}</b> {this.props.text} </p>
          </div>

        </div>
      )

    }
}


class Description extends React.Component{
render() {
  return (
    <div className="">
      <p className="text-center">{this.props.text}</p>
    </div>
  )
}
}

export default Person;
