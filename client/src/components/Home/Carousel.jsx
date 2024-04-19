import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./Carousal.module.scss";
class DemoCarousel extends Component {
  render() {
    return (
      <div className={classes.demo_top_main}>
        <Carousel>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/7cac5455bc76f32a.jpg?dim=1440x0&dpr=1&q=100"
              alt="img-1"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/357aee5e22ca81f8.jpg?dim=1440x0&dpr=1.25&q=100"
              alt="img-1"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/c8f548688def283c.jpg?dim=1440x0&dpr=1&q=100"
              alt="img-1"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/a86d6e688296f007.png?dim=1440x0&dpr=1&q=100"
              alt="img-1"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/5b4673d2292cd86c.png?dim=1440x0&dpr=1&q=100"
              alt="img-1"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/08933f5685221c9b.jpg?dim=1440x0&dpr=1&q=100"
              alt="img-1"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/93b99990a7fa61d6.jpg?dim=1440x0&dpr=1&q=100"
              alt="img-1"
            />
          </div>
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/bd94c9e6358f3a70.jpg?dim=1440x0&dpr=1&q=100"
              alt="img-1"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
