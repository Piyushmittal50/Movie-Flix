import React, { useRef } from 'react'
import lang from '../utils/lanConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { options } from '../utils/mockData';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // make an api call of gpt api and get movies

    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);
    const listString = gptResults.choices?.[0]?.message?.content;
    const gptMovies = listString.split(',');

    // get array of movies
    // now for each movie search in TMDB movie database
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // it returns promise arraay
    const tmdbResultArray = await Promise.all(promiseArray);
    console.log(tmdbResultArray);
    dispatch(addGptMovieResult({movieName:gptMovies,movieResults:tmdbResultArray}));
  };

    return (
        <div className='pt-[10%] flex justify-center'>
          <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onClick={(e)=>e.preventDefault()}>
          <input ref={searchText} type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder} />
          <button className='m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3'
            onClick={handleGptSearchClick}
          >
          🔎{lang[langKey].search}</button>
          </form>
        </div>
    );
};

export default GptSearchBar;