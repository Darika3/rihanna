import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://besthqwallpapers.com/Uploads/8-3-2020/124071/rihanna-barbados-singer-portrait-photoshoot-monochrome.jpg"
            alt="Third slide"
            style={{ height: "710px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://images6.fanpop.com/image/photos/41300000/Rihanna-Vogue-june-2018-cover-rihanna-41382352-1440-900.jpg"
            alt="Third slide"
            style={{ height: "710px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
