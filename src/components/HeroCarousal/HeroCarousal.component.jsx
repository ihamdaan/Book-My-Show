import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";

//Components
import {NextArrow, PrevArrow} from "./Arrows.components";

//axios
import axios from "axios";



const HeroCarousal = () => {

  //state to conatin all images of Hero section (hooks)
  const [images, setImages] = useState([]);

  useEffect ( () => {

    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    requestNowPlayingMovies();

  }, [] );

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return(
    <>
      <div className="lg:hidden">
        {/*for small and medium devices*/}
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-96 py-3">
              <img 
              src={`http://image.tmdb.org/t/p/original${image.backdrop_path}`} 
              alt="Now Playing" 
              className="w-full h-full"/>
            </div>
          ))}
        </HeroSlider>
      </div>


      <div className="hidden lg:block">
        {/*for large devices*/}
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img 
              src={`http://image.tmdb.org/t/p/original${image.backdrop_path}`} 
              alt="Now Playing" 
              className="w-full h-full rounded-md"/>
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;