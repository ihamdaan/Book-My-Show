import React from "react";
import {BiChevronRight, BiSearch,BiMenu, BiChevronDown} from "react-icons/bi";

//Mobile Screen
const NavSm = () => {
  return(
    <>
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold ">
          It All starts Here!
        </h3>
        <span className="text-gray-400 text-xs flex items-center"> 
          Chandigarh
          <BiChevronRight />
        </span>
      </div>
      <div className="w-8 h-8">
        <BiSearch className="w-full h-full"/>
      </div>
    </div>
  </>
  );
};

//Tab Screen
const NavMd = () => {
  return(
    <>
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
const Navbar = () => {
  return(
    <>
      <nav className="bg-bms-800 p-4">
        <div className="md:hidden">
          {/*Small Screen*/}
          <NavSm />
        </div>

        <div className="hidden md:flex lg:hidden">
          {/*Medium Screen*/}
          <NavMd />
        </div>

        <div className="hidden lg:flex">
          {/*Large Screen*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};


export default Navbar;