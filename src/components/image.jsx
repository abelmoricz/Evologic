import React from 'react'
import './image.css'


class Image extends React.Component {

   render() {
     if(this.props.addtext != "1"){
      return (
        <div className="thumbnail">
          <img className="image" src={this.props.img} />
          <div className="caption"> {this.props.text} </div>
        </div>
      )
    }
    if(this.props.addtext == "1"){
      return (
        <div className="thumbnail">
          <img className="image-2" src={this.props.img} />
          <div className="">
            <div className="caption-2"> {this.props.text} </div>
            <div className="content">
              <h3>{this.props.text}</h3>
              <p >Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra
               justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis</p>
            </div>
          </div>
        </div>
      )
    }
  }//End render
}
export default Image;
