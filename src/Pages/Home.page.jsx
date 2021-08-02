import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <div className="bg-page-800">
      <div className="flex flex-col gap-10">
        <div>
          <div className="lg:hidden">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-480:w-600/premieres-v6-collection-202104050255.png"
            alt="Banner" className="w-full h-full"/>
          </div>

          <div className="mt-12 hidden lg:block container mx-auto px-4">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" 
            alt="Banner" className="w-full h-full"/>
          </div>
        </div>
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-gray-800 my-2 lg:my-4">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-bms-800 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={TempPosters}
              title="Premieres"
              subtitle="Brand new relases every friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Online Streaming events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title="Outdoor events"
            isDark={false}
            />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title="Laughter Therapy"
            isDark={false}
            />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title="Popular Events"
            isDark={false}
            />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title="The Latest Plays"
            isDark={false}
            />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title="Top Games & Sports Events"
            isDark={false}
            />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title="Explore Fun Activities"
            isDark={false}
            />
      </div>
    </div>
  );
};

export default HomePage;