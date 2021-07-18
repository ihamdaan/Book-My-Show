import React from "react";
import {BiSearch, BiShareAlt, BiMenu, BiChevronDown} from "react-icons/bi";

//Mobile Screen & Tab Screen
const NavSm = () => {
  return(
    <>
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold ">
          It All starts Here!
        </h3>
      </div>
      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full"/>
      </div>
    </div>
  </>
  );
};

//Laptop Screen
const NavLg = () => {
  return(
  <>
    <div className="container mx-auto px-4 flex gap-3 justify-between">
      <div className="flex items-center w-1/2 gap-3">
        <div className="w-12 h-12">
          <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full"/>
        </div>
        <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
          <div className="w-6 h-6">
            <BiSearch className="w-full h-full"/>
          </div>
          <input 
          type="search" 
          className="w-full bg-transparent border-none focus:outline-none" 
          placeholder="Search for movies, events, plays, sports and activities"
          />
       </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-200 text-s flex items-center hover:text-white cursor-pointer"> 
          Chandigarh
          <BiChevronDown />
        </span>
        <button className="text-white bg-red-500 px-2 py-1 text-sm rounded ">Sign in</button>
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full"/>
        </div>
      </div>
    </div>
  </>
  );
};


//Main Function to export
const MovieNavbar = () => {
  return(
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-800 p-2 md:p-4">
        <div className="md:hidden">
          {/*Small Screen*/}
          <NavSm />
        </div>

        <div className="hidden md:block lg:hidden">
          {/*Medium Screen, Since we have same Navbars for both layout we will use NavSm*/}
          <NavSm />
        </div>

        <div className="hidden lg:flex">
          {/*Large Screen*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};


export default MovieNavbar;