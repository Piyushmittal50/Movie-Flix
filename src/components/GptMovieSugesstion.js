import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";
const GptMovieSugesstion = () => {
  const { movieName, movieResults } = useSelector(store => store.gpt);
  if (!movieName) return null;

  return (
    <div className='w-full ml-0 p-4 m-4 bg-black text-white'>
      <div>
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSugesstion;