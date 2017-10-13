import React, { Component } from 'react';

export default class Nav extends Component{
  render(){
    return(
      <div className="navigation">
        <div className="restaurant_logo">Trieggo's</div>
        <ul className="navigation_list">
          <li className="nav_item">CONTACT</li>
          <li className="nav_item">NEWS</li>
          <li className="nav_item">RECIPES</li>
          <li className="nav_item">SHOP</li>
        </ul>
      </div>
    )
  }
}
