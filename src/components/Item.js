import React, { Component } from 'react';


export default class Item extends Component{
  render(){
    return(
      <div className="menu_item">
        <div className="menu_item_title">{this.props.title}</div>
        <div className="menu_item_content">
          <div className="menu_item_description">
            Have gathered wherein grass abundantly us a morning and, won't man so signs moveth first great............................
          </div>
          <div className="menu_item_price">$17</div>
        </div>
      </div>
    );
  }
}
