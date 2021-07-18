import React from "react";


//Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";


//import Posters
import TempPoster from "../config/TempPosters.config";

//impost Poster Slider
import PosterSlider from "../components/Poster/Poster.component";

const HomePage = () => {
    return(
    <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4 py-16">
                {/*Entertainment Slider*/}
                <h1 className="text-2xl font-bold text-black my-3 mx-3">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className="bg-bms-800 py-12">
                {/*Premiere Poster Slider*/}
                <div className="container mx-auto px-4">
                    <div className="hidden md:flex px-4">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier" className="w-full h-full"/>
                    </div>
                    <PosterSlider images={TempPoster} title="Premieres" subtitle="Brand new releases every friday" isDark={true}/>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/*Online Streaming Poster Slider*/}
                <PosterSlider images={TempPoster} title="Online Streaming Events" isDark={false} />
            </div>

            <div className="container mx-auto px-4">
                {/*Outdoor Events Slider*/}
                <PosterSlider images={TempPoster} title="Outdoor Events" isDark={false} />
            </div>
        </div>
    </>
    );
};

export default HomePage;