import React from 'react'

//Components
import MovieNavbar from '../components/Navbar/movieNavbar.component';
import MovieContentList from '../components/ContentList/MovieContentList.component';

const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar />
            <MovieContentList />
            {props.children}
        </>
    )
}

export default MovieLayout; 
