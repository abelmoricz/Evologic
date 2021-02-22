import React from 'react';

import strain from '../assets/value_chain/strain.svg';






class Value_Chain_Item extends React.Component {

  constructor () {
    super()
    this.state = { isHidden: true }
  }
  toggleHidden () {
    this.setState({ isHidden: !this.state.isHidden })
  }

  render () {
    return (
      <div className="text-center mb-5">
        <div onClick={this.toggleHidden.bind(this)}>
          <img src={this.props.img}  width="66%"/>
          <h3 className="brown">{this.props.title}</h3>
        </div>

        {!this.state.isHidden && <Description title={this.props.title} text={this.props.text}/>}
      </div>
    )
  }
  }

  class Description extends React.Component{
  render() {
    return (
      <div className="">
        <p>{this.props.text}</p>
      </div>
    )
  }
}


export default Value_Chain_Item;
