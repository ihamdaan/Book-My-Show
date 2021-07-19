import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Add HomePage Component
import HomePage from "./Pages/Home.page";

// Add Movie Component
import Movie from "./Pages/Movie.page";

//Add Plays Component
import Plays from "./Pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;