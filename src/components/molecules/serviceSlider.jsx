import { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServiceCards from "./serviceCards";
// import {BsBehance} from 'react-icons/bs'
// import {HiOutlineUsers} from 'react-icons/hi2'

export default class Resizable extends Component {
  state = {
    display: true,
    width: 'full'
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <>
      <div className="my-8 hidden md:block">
        <div
          style={{
            width: this.state.width,
            display: this.state.display ?  "block" :"none"
          }}
        >
          <Slider {...settings} >
        
            <ServiceCards />
            <br/>
           
            <ServiceCards />
              <br/>
        
            <ServiceCards />
              <br/>
             
            <ServiceCards />
              <br/>
          
            <ServiceCards />
            <br/>
           
          </Slider>
        </div>
      </div>
        <div className="my-8 md:hidden">
        <div
          style={{
            width: this.state.width,
            display: this.state.display ?  "block" :"none"
          }}
        >
          <Slider {...settings} >
        
            <ServiceCards />
            <br/>
            <br className="md:hidden"/>
            <ServiceCards />
              <br/>
              <br className="md:hidden"/>
            <ServiceCards />
              <br/>
              <br className="md:hidden"/>
            <ServiceCards />
              <br/>
              <br className="md:hidden"/>
            <ServiceCards />
            <br/>
            <br className="md:hidden"/>
          </Slider>
        </div>
      </div>
      </>
    );
  }
}
