import MovieHero from "../components/MovieHero/MovieHero.component";
import { RiVisaFill } from "react-icons/ri";
import { FaCcApplePay } from "react-icons/fa";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

//component
import Cast from "../components/Cast/Cast.component";

//import temporary Posters
import TempPoster from "../config/TempPosters.config";

//import Poster Slider
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//Movie Context
import { MovieContext } from "../context/movie.context";

//Slider
import Slider from "react-slick";


const Movie = () => {

    const {id} = useParams();
    
    const {movie} = useContext(MovieContext);

    const [cast, setCast] = useState([]);

    useEffect (() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    })

    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {

        const requestSimilarMovies = async () => {
          const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
          setSimilarMovies(getSimilarMovies.data.results);
        };
    
        requestSimilarMovies ();
    
    }, [id]);

    useEffect(() => {

        const requestRecommended = async () => {
          const getRecommended = await axios.get(`/movie/${id}/recommendations`);
          setRecommended(getRecommended.data.results);
        };
    
        requestRecommended ();
    
    }, [id]);

    const movieSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
    };

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>
                        {movie.overview}
                    </p>
                </div>

                <div className="my-8"><hr /></div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
                    
                    <div className="flex flex-col gap-3 lg:flex-row">

                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-300 border-dashed rounded-md">
                            <div className="w-8 h-8">
                                <RiVisaFill className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 textxl font-bold">Visa Stream Offer</h3>
                                <p className="text-gray-600">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-300 border-dashed rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 textxl font-bold">Filmy Pass</h3>
                                <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="my-8"><hr /></div>

                <div className="my-8 flex flex-col">

                    <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>

                    <Slider {...settingsCast}>
                        {cast.map((castdata) => (<Cast 
                        image={`http://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                        castName={castdata.original_name}
                        role={castdata.character}/>
                        ))} 
                    </Slider>  
                </div>

                <div className="my-8"><hr /></div>

                <div className="my-8">
                    <PosterSlider 
                    config={movieSettings}
                    images={similarMovies} 
                    title="You might also like" 
                    isDark={false} />
                </div>

                <div className="my-8"><hr /></div>

                <div className="my-8">
                    <PosterSlider 
                    config={movieSettings}
                    images={recommended} 
                    title="BMS XCLUSIV" 
                    isDark={false} />
                </div>
            </div>
        </>
    )
}

export default Movie;
