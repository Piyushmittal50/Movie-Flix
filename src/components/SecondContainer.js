import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'
const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black'>
      <div className='m-0 md:-mt-52 pl-2 md:pl-8 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList title={"Tv Series"} movies={movies.TvSeries} />
      </div>
    </div>
  );
}

export default SecondContainer;