import React from 'react';
import banner from '../style/banner.css'
import Plx from 'react-plx';


class Banner extends React.Component{
  render(){
    return(
      <div className="banner">
        <div className="name">
          <h2>Shivani Br<span className="ij">ij</span>mohan</h2>
        </div>
        <div className="profession">
          <h2>Soft<span className="w">w</span>are Engin<span className="ee">ee</span>r</h2>
        </div>
        <div className="life">
          <h2>Learn<span className="e">e</span>r</h2>
        </div>
      </div>
    )
  }
}
export default Banner;
