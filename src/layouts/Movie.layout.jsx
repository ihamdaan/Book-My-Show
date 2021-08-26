import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";

//Components
import MovieNavbar from '../components/Navbar/movieNavbar.component';
import MovieContentList from '../components/ContentList/MovieContentList.component';

//context
import { MovieContext } from '../context/movie.context';
import axios from 'axios';

const MovieLayout = (props) => {

    const { id } = useParams ();
    const {movie, setMovie} = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        };
        requestMovie();
    }, [id]);

    return (
        <>
            <MovieNavbar />
            <MovieContentList />
            {props.children}
        </>
    )
}

export default MovieLayout; 
