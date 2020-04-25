import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import abitaBrown from '../images/abita-brown.png'
import abitaColor from '../images/abita-color.png'
import jailhouseBrown from '../images/jailhouse-brown.png'
import jailhouseColor from '../images/jailhouse-color.png'
import wildleapBrown from '../images/wildleap-brown.png'
import wildleapColor from '../images/wildleap-color.png'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

class SimpleSlider extends React.Component {
    render() {
      var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        autoplay: true
      };
      return (
        <Slider {...settings}>
          <div>
            <img src={abitaBrown} className="slide-images"/>
          </div>
          <div>
            <img src={abitaColor} className="slide-images"/>
          </div>
          <div>
            <img src={jailhouseBrown} className="slide-images"/>
          </div>
          <div>
            <img src={jailhouseColor} className="slide-images"/>
          </div>
          <div>
            <img src={wildleapBrown} className="slide-images"/>
          </div>
          <div>
            <img src={wildleapColor} className="slide-images"/>
          </div>
        </Slider>
      );
    }
  }

  export default SimpleSlider