import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'
const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondContainer;