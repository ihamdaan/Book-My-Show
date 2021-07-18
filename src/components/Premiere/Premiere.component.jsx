import React from 'react'
import Slider from 'react-slick';

//import poster here
import Poster from '../Poster/Poster.component';

//import config here for the carousal of poster settings
import PosterCarousalSettings from '../../config/PosterCarousal.config';

//import config here for the carousal of poster premier
import PremierImage from '../../config/TempPosters.config';

export const Premiere = () => {

    return (
        <>
            <div className="flex flex-col items-start px-4 my-2">
                <h3 className="text-white text-xl font-bold">Premieres</h3>
                <p className="text-white text-sm ">Brand new releases every Friday</p>
            </div>

            <div>
                <Slider {...PosterCarousalSettings}>
                    {PremierImage.map((image) => (
                        <Poster {...image} isDark/>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Premiere;
