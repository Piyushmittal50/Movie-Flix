import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSugesstion from './GptMovieSugesstion';
import { BG_IMG } from '../utils/mockData';

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img className="h-screen w-screen object-cover" src={BG_IMG} alt="logo" />
      </div>
      <div className='pt-[30%] md:pt-[5%]'>
        <GptSearchBar />
        <GptMovieSugesstion />
      </div>
    </>
  );
}

export default GptSearchPage;