import React from "react";


//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import ContentList from "../components/ContentList/ContentList.container";

const DefaultLayout = (props) => {
  return (<>
    <Navbar />
    <ContentList />
    <HeroCarousal />
    {props.children}
    </>);
};

export default DefaultLayout;