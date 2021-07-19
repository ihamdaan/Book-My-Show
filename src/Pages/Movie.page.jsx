import MovieHero from "../components/MovieHero/MovieHero.component";
import { RiVisaFill } from "react-icons/ri";
import { FaCcApplePay } from "react-icons/fa";

//component
import Cast from "../components/Cast/Cast.component";

//import temporary Posters
import TempPoster from "../config/TempPosters.config";

//import Poster Slider
import PosterSlider from "../components/PosterSlider/PosterSlider.component";



const Movie = () => {

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

    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>
                        Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
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

                    <div className="flex flex-wrap gap-4">
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" 
                        castName="Henry Cavil" 
                        role="Superman"/>

                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg" 
                        castName="Ben Afflleck" 
                        role="Batman"/>

                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg" 
                        castName="Gal Gadot" 
                        role="Wonder Woman"/>

                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg" 
                        castName="Jason Momoa" 
                        role="Aquaman"/>

                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ezra-miller-34889-24-03-2017-16-04-22.jpg" 
                        castName="Ezra Miller" 
                        role="The Flash"/>

                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg" 
                        castName="Ray Fisher" 
                        role="Cyborg"/>
                    </div>
                </div>

                <div className="my-8"><hr /></div>

                <div className="my-8">
                    <PosterSlider 
                    config={movieSettings}
                    images={TempPoster} 
                    title="You might also like" 
                    isDark={false} />
                </div>

                <div className="my-8"><hr /></div>

                <div className="my-8">
                    <PosterSlider 
                    config={movieSettings}
                    images={TempPoster} 
                    title="BMS XCLUSIV" 
                    isDark={false} />
                </div>
            </div>
        </>
    )
}

export default Movie;
