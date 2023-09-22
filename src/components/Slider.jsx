import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider1, slider2 } from "../assets";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      centerMode:true,
    };

    return (
      <div className=" max-w-5xl mx-auto ">
        <Slider {...settings}>
          <div className="px-5">
            <img src={slider1}></img>
          </div>
          <div className="px-5">
            <img src={slider2}></img>
          </div>
          <div className="px-5">
            <img src={slider1}></img>
          </div>
          <div className="px-5">
            <img src={slider2}></img>
          </div>
        </Slider>
      </div>
    );
  }
}