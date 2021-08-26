import React, {useContext} from 'react';

//Movie Context
import { MovieContext } from '../../context/movie.context';

const MovieInfo = () => {

    const { movie } = useContext(MovieContext);

    //optional chaining
    const genres = movie.genres?.map(({name}) => name).join(", ");

    return (
        <>
            <div className="flex flex-col gap-4 md:gap-2 lg:gap-12">
                <div className="flex items-center gap-3 p-1 lg:gap-5 md:px-4">
                    <div className="w-36 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="Premiere" className="w-full h-full"/>
                    </div>
                    <span className="bg-bms-700 p-2 text-white text-xs rounded-md">Streaming Now</span>
                </div>
                <h1 className="lg:text-4xl text-white font-bold hidden md:block md:px-4">{movie.original_title}</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-3">
                    <div className="font-light text-white flex flex-col gap-2 lg:gap-5 md:px-4">
                        <h4>4k &bull; {movie.original_language} &bull; Action</h4>
                        <h4>{(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 16+</h4>
                    </div>

                    <div className="flex items-center gap-3 md:w-screen lg:w-full md:px-4">
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">Rent ₹149</button>
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">Buy ₹689</button>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default MovieInfo;
