import React, { Component } from 'react';
import Item from './Item';
import jquery from 'jquery';

export default class Menu extends Component{
  componentDidMount(){
    const menu_title = document.getElementsByClassName('menu_title');
    const transform_delay = (elem,time,attribute) =>{
      setTimeout(()=>{
        elem.className+=attribute;
      },time);
    }
    if(jquery(document).scrollTop() > 1892){
      console.log('displaying');
      transform_delay(menu_title,250,' displaying');
    }
  }
  render(){
    return(
      <div className="menu">
        <img className="pizza" src="../images/pizza.jpg" alt='pizza'/>
        <img className="fusilli" src="../images/fusilli.jpg" alt='fusilli'/>
        <img className="uncooked_pasta" src="../images/uncooked_pasta.jpg" alt='uncooked_pasta'/>
        <div className="menu_title">
          Menu
          <div className='dash'>_____</div>
        </div>
        <div id="menu_subtitle1" className="menu_subtitle">FOOD & APERTIVES</div>
        <div className="menu_main">
          <div id="menu_col1" className="menu_col">
            <Item title="PIZZA MEXICANA" />
            <Item title="PIZZA QUATRO STAGIONI" />
            <Item title="PIZZA QUATRO FORMAGI" />
            <Item title="PIZZA CARNIVORA" />

          </div>
          <div id="menu_col2" className="menu_col">
            <Item title="LASAGNA" />
            <Item title="LASAGNA NAPOLITANA" />
            <Item title="OTHER LASAGNA" />
          </div>
        </div>
        <div id="menu_section2">
          <div className="menu_subtitle">DESSERTS</div>
          <div className="menu_main">
            <div className="menu_col">
              <Item title="TIRAMISU" />
              <Item title="PIZZELLES" />
              <Item title="SICILIAN RICOTTA" />
            </div>
            <div className="menu_col">
              <Item title="CANNOLI" />
              <Item title="DOUBLE CHOCO BISCOTTI" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
