import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    "https://images.unsplash.com/photo-1622495549609-523be9cc6f32?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1542293787938-c9e299b880cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1548638168-bdb1d0f1e700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1533567120930-ad223a6ac8e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1450045439515-ff27c2f2e6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80"
  ];

  return(
    <>
      <div className="lg:hidden">
        {/*for small and medium devices*/}
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-96 py-3">
              <img src={image} alt="testing" className="w-full h-full"/>
            </div>
          ))}
        </HeroSlider>
      </div>


      <div className="hidden lg:block">
        {/*for large devices*/}
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img src={image} alt="testing" className="w-full h-full rounded-md"/>
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;