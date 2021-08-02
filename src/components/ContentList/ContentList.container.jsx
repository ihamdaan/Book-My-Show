import React from 'react';
import Slider from "react-slick";


/*Mobile & Tab Screens*/
const NavSmMd = () => {

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 0,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
          ],
    };

    return (
    <>
        <div>
            <div className="mt-3">
                <Slider {...settings}>
                <div className="w-20 h-20 md:w-10 md:h-24">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/movies-v3-collection-202101080832.png" 
                    alt="Movie Icon" className="w-full h-full"/>
                </div>

                <div className="w-20 h-20 md:w-10 md:h-24">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/stream-v3-new-tag-collection-202102040316.png" 
                    alt="Stream Icon" className="w-full h-full"/>
                </div>

                <div className="w-20 h-20 md:w-10 md:h-24">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/events-v3-collection-202101080832.png" 
                    alt="Events Icon" className="w-full h-full"/>
                </div>

                <div className="w-20 h-20 md:w-10 md:h-24">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/sports-v3-collection-202101080832.png" 
                    alt="Sports Icon" className="w-full h-full"/>
                </div>

                <div className="w-20 h-20 md:w-10 md:h-24">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/plays-v3-collection-202101080832.png" 
                    alt="Plays Icon" className="w-full h-full"/>
                </div>

                <div className="w-20 h-20 md:w-10 md:h-24">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/activities-v3-collection-202101080832.png" 
                    alt="Activities Icon" className="w-full h-full"/>
                </div>
                </Slider>
            </div>
        </div>
    </>
    );
};


/*Large Screens*/
const NavLg = () => {
    return (
    <>
        <div className="bg-bms-900">
            <div className="container mx-auto px-4 flex flex justify-between items-center py-2">
                <div className=" flex items-center gap-6">
                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        Movies
                    </span>

                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        Events
                    </span>

                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        Plays
                    </span>

                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        Sports
                    </span>

                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        Activities
                    </span>
                </div>


                <div className=" flex items-center gap-6">
                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        List Your Show
                    </span>

                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        Corporates
                    </span>

                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        Offers
                    </span>

                    <span className="text-gray-300 text-s hover:text-white cursor-pointer"> 
                        Gift Cards
                    </span>
                </div>
            </div>
        </div>
    </>
    );
};

const ContentList = () => {
    return (
        <nav>

            {/*Mobile & Tab Screens*/}
            <div className="lg:hidden">
                <NavSmMd />
            </div>


            {/*Large Screens*/}
            <div className="hidden lg:block">
                <NavLg />
            </div>
        </nav>
    )
}

export default ContentList;
