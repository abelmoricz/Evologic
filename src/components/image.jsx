import React from 'react'
import './image.css'


class Image extends React.Component {

   render() {
      return (

        <div className="thumbnail">
          <img className="image" src={this.props.img} />
          <div className="caption"> {this.props.text} </div>
        </div>

      )
   }
}
export default Image;
