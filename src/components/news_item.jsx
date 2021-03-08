import React from 'react';


class News_Item extends React.Component {

   render() {
      return (
        <div style={{border: 5 + 'px solid #433166' }} className="row text-center">

          {/*Image*/}
          <div className="col-sm-6 pt-3 pl-3 text_box d-none d-sm-flex"> {/*this disapears on mobile with d-none d-sm-flex*/}
            <img src={this.props.img} width="100%"/>
          </div>

          {/*Title*/}
          <div className="col-sm-6 p-3 text_box">
            <h4 className="purple">{this.props.title}</h4>
          </div>

          {/*For mobile version*/}
          <div className="col-sm-12 p-0 text_box d-flex d-sm-none"> {/*this appears on mobile with d-flex d-sm-none*/}
            <img src={this.props.img} width="100%"/>
          </div>

          {/*Description*/}
          <p className="m-0 mb-3" style={{fontSize: 12 + 'pt' }}>{this.props.text}</p>

        </div>
      )
    }

}
export default News_Item;
