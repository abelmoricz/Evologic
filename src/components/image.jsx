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
              <h4> {this.props.content_title}</h4>
              <p > {this.props.content} </p>
            </div>
          </div>
        </div>
      )
    }
  }//End render
}
export default Image;
