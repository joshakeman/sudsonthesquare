import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import suds1 from '../images/suds-1.jpg'
import suds2 from '../images/suds-2.jpg'
import suds3 from '../images/suds-3.jpg'
import suds4 from '../images/suds-4.jpg'
import suds5 from '../images/suds-5.jpg'
import suds6 from '../images/suds-6.jpg'

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
        // className: "slider-wrap",
        centerMode: true,
        // infinite: true,
        // centerPadding: "60px",
        slidesToShow: 3,
        // slidesToScroll: 1,
        // arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // infinite: true
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={suds1} className="slide-images"/>
            </div>
            <div>
              <img src={suds2} className="slide-images"/>
            </div>
            <div>
              <img src={suds3} className="slide-images"/>
            </div>
            <div>
              <img src={suds4} className="slide-images"/>
            </div>
            <div>
              <img src={suds5} className="slide-images"/>
            </div>
            <div>
              <img src={suds6} className="slide-images"/>
            </div>
          </Slider>
        </div>
      );
    }
  }

  export default SimpleSlider