import React, { Component } from 'react';
import jquery from 'jquery';

export default class Nav extends Component{
  constructor(props){
    super(props);
    this.state={
      nav_mobile:false
    }
  }
  handleClick(e){
    const id = '#'+e.target.id;
    jquery('.nav_item').removeClass('nav_clicked');
    jquery(id).addClass('nav_clicked');
  }
  render(){
    const nav_menu_class = (this.state.nav_mobile) ?
      'navigation_list nav_mobile'
     : 'navigation_list nav_mobile collapsed';
    return(
      <div className="navigation">
        <div className="restaurant_logo">Trieggo's</div>
        <ul className="navigation_list nav_full">
          <li className="nav_item">CONTACT</li>
          <li className="nav_item">NEWS</li>
          <li className="nav_item">RECIPES</li>
          <li className="nav_item">SHOP</li>
        </ul>
        <ul className={nav_menu_class}>
          <div className='nav_mobile_opacity'></div>
          <li id="contact" onClick={this.handleClick.bind(this)} className="nav_item">CONTACT</li>
          <li id="news" onClick={this.handleClick.bind(this)} className="nav_item">NEWS</li>
          <li id="recipes" onClick={this.handleClick.bind(this)} className="nav_item">RECIPES</li>
          <li id="shop" onClick={this.handleClick.bind(this)} className="nav_item">SHOP</li>
        </ul>
        <div onClick={()=>this.setState({nav_mobile:!this.state.nav_mobile})} className="nav_mobile_btn">
          <div>&#8801;</div>
        </div>
      </div>
    )
  }
}
