import React, {useState, useEffect} from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";

//axios
import axios from "axios";

const HomePage = () => {

  //state for premier section of the home page (hook)
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {

    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies ();

  }, []);

  //state for top rated movies section of the home page (hook)
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {

    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies ();

  }, []);

  //state for upcoming movies section of the home page (hook)
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {

    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies ();

  }, []);

  //state for now playing movies section of the home page (hook)
  const [nowPlayingMoviesPoster, setNowPlayingMoviesPoster] = useState([]);

  useEffect(() => {

    const requestNowPlayingMoviesPoster = async () => {
      const getNowPlayingMoviesPoster = await axios.get("/movie/now_playing");
      setNowPlayingMoviesPoster(getNowPlayingMoviesPoster.data.results);
    };

    requestNowPlayingMoviesPoster ();

  }, []);

  return (
    <div className="bg-page-800 py-2">
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

            {/* Premier Section */}
            <PosterSlider
              images={popularMovies}
              title="Premieres"
              subtitle="Brand new relases every friday"
              isDark
            />
          </div>
        </div>
      </div>

      {/* Top Rated Movies Section */}
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={topRatedMovies}
          title="Top Rated Movies"
          isDark={false}
        />
      </div>

      {/* Upcoming Movies Section */}
      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={upcomingMovies}
            title="Upcoming Movies"
            isDark={false}
            />
      </div>

      {/* NowPlaying Movies Section */}
      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={nowPlayingMoviesPoster}
            title="Now Playing Movies"
            isDark={false}
            />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={upcomingMovies}
            title="Popular Events"
            isDark={false}
            />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={topRatedMovies}
            title="The Latest Plays"
            isDark={false}
            />
      </div>

      <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={popularMovies}
            title="Top Games & Sports Events"
            isDark={false}
            />
      </div>

    </div>
  );
};

export default HomePage;