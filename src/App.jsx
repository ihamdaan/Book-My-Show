import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Add HomePage Component
import HomePage from "./Pages/Home.page";

// Add Movie Component
import Movie from "./Pages/Movie.page";

//Add Plays Component
import Plays from "./Pages/Plays.page";

//Add Events Component
import Events from "./Pages/Events.page";

//Add Sports Component
import Sports from "./Pages/Sports.page";

//Add Activities Component
import Activities from "./Pages/Activities.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Axios default Settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
      <DefaultHOC path="/events" exact component={Events} />
      <DefaultHOC path="/sports" exact component={Sports} />
      <DefaultHOC path="/activities" exact component={Activities} />
    </>
  );
}

export default App;