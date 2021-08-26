import React, {useContext} from 'react';

//context
import { MovieContext } from '../../context/movie.context';

//import info component of the Movie Hero
import MovieInfo from './MovieInfo.component';

const MovieHero = () => {

    const {movie} = useContext (MovieContext);

    return (<>

        {/*Mobile Screen*/}
        <div className="md:hidden" style={{height: "calc(180vw)"}}>

            <div className="z-20 absolute left-4 bottom-5">
                <MovieInfo />
            </div>

            <div className="absolute h-56 bg-opacity-50 w-full bottom-0 bg-black z-10" />
            <img 
                src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Movie Poster" 
                className="w-full h-full"
            />
        </div>


        {/*Medium Screen*/}
        <div
          className="relative hidden md:block w-full lg:hidden"
          style={{ height: "calc(100vw)" }}>
          <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <div className="absolute z-20 bottom-4 ">
            <MovieInfo />
          </div>
          <img
            src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
            className="w-full h-full"
          />
        </div>


        {/*Large Screen*/}
        <div className="relative hidden lg:block w-full" style={{height: "30rem"}}>
            <div className="absolute h-full w-full z-10" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",}}></div>
            
            <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                <div className="h-96 w-64 ">
                    <img 
                        src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="Movie Poster" 
                        className="w-full h-full rounded-xl"
                    />
                </div>
                <div>
                    <MovieInfo />
                </div>
            </div>

            <img 
                src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="Movie Poster" 
                className="w-full h-full"
            />
        </div>
        </>
    )
}

export default MovieHero;
