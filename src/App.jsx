import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
import HomePage from "./components/pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;