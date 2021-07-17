import React from "react";

//Components
import EntertainmentCardSlider from "../Entertainment/Entertainmentcard.component";
import Premier from "../../Premier/Premier.component";

const HomePage = () => {
    return(
    <>
        <div className="container mx-auto px-4 py-1">
            <h1 className="text-2xl font-bold text-black my-3 mx-3">The Best of Entertainment</h1>
            <EntertainmentCardSlider />
            <Premier />
        </div>
    </>
    );
};

export default HomePage;