import React, { useRef } from 'react'
import lang from '../utils/lanConstant';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

    return (
        <div className='pt-[10%] flex justify-center'>
          <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onClick={(e)=>e.preventDefault()}>
          <input ref={searchText} type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder} />
          <button className='m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3'
          >
          🔎{lang[langKey].search}</button>
          </form>
        </div>
    );
};

export default GptSearchBar;