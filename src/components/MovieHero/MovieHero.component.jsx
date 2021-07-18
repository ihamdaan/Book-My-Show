import React from 'react'

//import info component of the Movie Hero
import MovieInfo from './MovieInfo.component';

const MovieHero = () => {
    return (<>

        {/*Mobile Screen*/}
        <div className="md:hidden" style={{height: "calc(180vw)"}}>

            <div className="z-20 absolute left-4 bottom-5">
                <MovieInfo />
            </div>

            <div className="absolute h-56 bg-opacity-50 w-full bottom-0 bg-black z-10" />
            <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" 
            alt="Movie Poster" className="w-full h-full"/>
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
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>


        {/*Large Screen*/}
        <div className="relative hidden lg:block w-full" style={{height: "30rem"}}>
            <div className="absolute h-full w-full z-10" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",}}></div>
            
            <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                <div className="h-96 w-64 ">
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" 
                    alt="Movie Poster" className="w-full h-full rounded-xl"/>
                </div>
                <div>
                    <MovieInfo />
                </div>
            </div>

            <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg" 
            alt="Movie Poster" className="w-full h-full"/>
        </div>
        </>
    )
}

export default MovieHero;
