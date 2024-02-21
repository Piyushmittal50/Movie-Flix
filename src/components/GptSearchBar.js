import React, { useRef } from 'react'
import lang from '../utils/lanConstant';
import { useSelector } from 'react-redux';
import openai from "../utils/openai";
const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an api call of GPT Api and then get movies data

    const gptQuery =
      "Act as a Movie Recommendation System and Suggest Some Movies for Query : " +
      searchText.current.value +
      " .Only gives me names of 5 movies by comma seperated , and format is like : Gadar, Don, Ravan, KGF, Sholay";

    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(GptResults.choices[0]?.message?.content);

    // "Mirzapur, Sacred Games, Paatal Lok, Criminal Justice, Bard of Blood"
    const gptMovies = GptResults.choices[0]?.message?.content.split(",");
  }
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