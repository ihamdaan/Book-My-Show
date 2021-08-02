import React from 'react';


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

const MovieContentList = () => {
    return (
        <nav>
            {/*Large Screens*/}
            <div className="hidden lg:block">
                <NavLg />
            </div>
        </nav>
    )
}

export default MovieContentList;
