import React from 'react';
import Slider from "react-slick";

//import poster here
import Poster from '../Poster/Poster.component';

//import config here for the carousal of poster settings
import PosterCarousalSettings from '../../config/PosterCarousal.config';

const PosterSlider = (props) => {

    //to apply custom config/settings for the slider poster/image
    const sliderConfig = props.config ? props.config : PosterCarousalSettings;

    return (
        <>
            <div className="flex flex-col items-start px-4 my-2">
                <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
            </div>

            <div>
                <Slider {...sliderConfig}>
                    {props.images.map((image) => (
                        <Poster {...image} isDark={props.isDark} />
                    ))}
                </Slider>
            </div>
        </>
    )
}


export default PosterSlider;