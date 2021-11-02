import React, { Component } from "react";
import './MainCarousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from "../../images/sliderbg1.png";
import bg2 from "../../images/sliderbg2.png";

export default class MainCarousel extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="container-fluid">
                <Slider {...settings}>
                    <div className="bg-slide1">
                        <img src={bg1} width="100%" alt="?" />
                    </div>
                    <div className="bg-slide1">
                        <img src={bg2} width="100%" alt="?" />
                    </div>
                </Slider>
            </div>
        );
    }
}