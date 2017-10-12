import React, { Component } from 'react';
import Menu from './components/Menu';
import jquery from 'jquery';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      expanded:false
    }
  }
  componentDidMount(){
    const title = this.refs.main_title;
    const subtitle = this.refs.subtitle;
    const about_1 = this.refs.about_1;
    const about_2 = this.refs.about_2;
    const about_3 = this.refs.about_3;
    const about_4 = this.refs.about_4;
    const five_inner = this.refs.five_inner;
    const six_inner = this.refs.six_inner;
    const seven_inner = this.refs.seven_inner;
    const eight_inner = this.refs.eight_inner;
    const our_specialties = this.refs.our_specialties;
    const menu_title = document.getElementsByClassName('menu_title')[0];
    const menu_main = document.getElementsByClassName('menu_main')[0];
    const pizza = document.getElementsByClassName('pizza')[0];
    const fusilli = document.getElementsByClassName('fusilli')[0];
    const uncooked_pasta = document.getElementsByClassName('uncooked_pasta')[0];
    const menu_col1 = document.getElementById('menu_col1');
    const menu_col2 = document.getElementById('menu_col2');
    const menu_subtitle1 = document.getElementById('menu_subtitle1');
    const menu_section2 = document.getElementById('menu_section2');
    const transform_delay = (elem,time,attribute) =>{
      setTimeout(()=>{
        const classes = elem.getAttribute('class');
        const regEx = new RegExp(attribute);
        if(regEx.test(classes)){
          return;
        }
        elem.className+=attribute;
      },time);
    }
    let scrollTop = () => jquery(document).scrollTop();
    //main title animate:
    transform_delay(subtitle,200,' restaurant_name_repositioned');
    transform_delay(title,100,' restaurant_name_repositioned');
    transform_delay(about_1,300,' about_box_animate_up');
    transform_delay(about_2,400,' about_box_animate_up');
    jquery(window).scroll(()=>{
      //about, reservation boxes animate upward:
      if(scrollTop() > 75){
        transform_delay(about_3,100,' about_box_animate_up');
        transform_delay(about_4,250,' about_box_animate_up');
      }
      //expand the specialties divider:
      if(scrollTop() > 575 && this.state.expanded==false){
        transform_delay(our_specialties,150, ' our_specialties_expanded');
        this.setState({
          expanded:true
        });
      }
      //bring together the food photo boxes:
      if(scrollTop() > 755){
        transform_delay(eight_inner ,150, ' inner_repositioned');
        transform_delay(seven_inner ,250, ' inner_repositioned');
        transform_delay(six_inner ,350, ' inner_repositioned');
        transform_delay(five_inner ,450, ' inner_repositioned');
      }
      //animate up the menu:
      if(scrollTop() > 1800){
        transform_delay(menu_title,250,' displaying');
        transform_delay(menu_subtitle1,450,' displaying');
        transform_delay(menu_subtitle1,450,' moved_up');
        transform_delay(menu_col1, 550,' displaying');
        transform_delay(fusilli, 750,' displaying');
        transform_delay(pizza, 850,' displaying');
        transform_delay(uncooked_pasta, 850,' displaying');
        transform_delay(menu_col1, 550,' moved_up');
        transform_delay(menu_col2, 750,' displaying');
        transform_delay(menu_col2, 550,' moved_up');
        transform_delay(menu_section2, 850,' displaying');
      }
      // if(scrollTop() > 1950){
      // }
    });
  }
  render() {
    return (
      <div className="trieggos">
        <header className="cornucopia">
          <div className="header_bkg"></div>
          <div className="cornucopia_opacity"></div>
          <div className="site_title">
            <div ref='main_title' className="restaurant_name">Trieggo's</div>
            <div ref='subtitle' className="restaurant_subtitle">I&nbsp;T&nbsp;A&nbsp;L&nbsp;I&nbsp;A&nbsp;N &nbsp;S&nbsp;P&nbsp;E&nbsp;C&nbsp;I&nbsp;A&nbsp;L&nbsp;T&nbsp;I&nbsp;E&nbsp;S</div>
          </div>
        </header>
        <div className="cream_divider">
          <div className="about">
            <div className="about_col">
              <div ref="about_1" className="about_1">
                <div className="about_header">Reservations</div>
                <p>Abundantly is said darkness behold multiply grass upon is sixth given, grass fourth can't. Forth whales fifth in. Called.</p>
                <div className="book_btn">BOOK A TABLE</div>
              </div>
              <div ref="about_2" className="about_2"></div>
            </div>
            <div className="about_col">
              <div ref="about_3" className="about_3"></div>
              <div ref="about_4" className="about_4">
                <div className="about_header">About</div>
                <p>
                  From sea, replenish thing said. Male deep. Firmament man and she'd made, image replenish, from won't fifth fish sea in meat may Upon him appear whales were of Kind is years. It after all after lights seas fifth. And fifth May, is whales multiply second. Man let living them that midst every light. From sea, replenish thing said. Male deep. Firmament man and she'd made, image replenish, from won't fifth fish sea in meat may Upon him appear whales were of Kind is years. It after all after lights seas fifth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref="our_specialties" className="our_specialties">
          <div className="specialties_parallax">
            <div className="specialties_opacity"></div>
            <div className="our_specialties_text">O&nbsp;U&nbsp;R&nbsp; S&nbsp;P&nbsp;E&nbsp;C&nbsp;I&nbsp;A&nbsp;L&nbsp;T&nbsp;I&nbsp;E&nbsp;S</div>
          </div>
        </div>

        <div className="cream_divider2">
          <div className="about2">
            <div className="about_col2">
              <div className="about_5">
                <div>
                  <div ref="five_inner" className="inner">
                      <div className="specialties_header"><div>LASAGNA</div></div>
                      <p>Abundantly is said darkness behold multiply. Called.</p>
                      <div className="specialties_price">FROM $15.40</div>
                  </div>
                </div>
              </div>
              <div className="about_6">
                <div>
                  <div ref="six_inner" className="inner"></div>
                </div>
              </div>
              <div className="about_7">
                <div>
                  <div ref="seven_inner" className="inner">
                        <div className="specialties_header"><div>EGGPLANT PARMAGIANA</div></div>
                        <p>Abundantly is said darkness behold multiply. Called.</p>
                        <div className="specialties_price">FROM $15.40</div>
                  </div>
                </div>
              </div>
              <div className="about_8">
                <div>
                  <div ref="eight_inner" className="inner"></div>
                </div>
              </div>
            </div>
            <div className="about_col2">
              <div className="about_9">
                <div>
                  <div className="inner"></div>
                </div>
              </div>
              <div className="about_10">
                <div>
                  <div className="inner">
                        <div className="specialties_header"><div>BARICOLE</div></div>
                        <p>Abundantly is said darkness behold multiply. Called.</p>
                        <div className="specialties_price">FROM $15.40</div>
                  </div>
                </div>
              </div>
              <div className="about_11">
                <div>
                  <div className="inner"></div>
                </div>
              </div>
              <div className="about_12">
                <div>
                  <div className="inner">
                        <div className="specialties_header"><div>SPAGHETTI WITH MEATBALLS</div></div>
                        <p>Abundantly is said darkness behold multiply. Called.</p>
                        <div className="specialties_price">FROM $15.40</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table_view">
          <div className="table_view_parallax">
            {/* <div></div> */}
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;
