import React, { Component } from 'react';

export default class Nav extends Component{
  render(){
    return(
      <div className="navigation">
        <div className="restaurant_logo">Trieggo's</div>
        <ul className="navigation_list nav_full">
          <li className="nav_item">CONTACT</li>
          <li className="nav_item">NEWS</li>
          <li className="nav_item">RECIPES</li>
          <li className="nav_item">SHOP</li>
        </ul>
        <ul className="navigation_list nav_mobile">
          <div className='nav_mobile_opacity'></div>
          <li className="nav_item">CONTACT</li>
          <li className="nav_item">NEWS</li>
          <li className="nav_item">RECIPES</li>
          <li className="nav_item">SHOP</li>
        </ul>
        <div className="nav_mobile_btn">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    )
  }
}
