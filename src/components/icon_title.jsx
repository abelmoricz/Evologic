import React from 'react';



class Icon_Title extends React.Component {

   render() {
      return (
        <div className=" text-center">
          <img className="img-responsive" src={this.props.icon} width="70%"/>
          <h5><b>{this.props.title}</b></h5>

        </div>
      )
    }

}
export default Icon_Title;
