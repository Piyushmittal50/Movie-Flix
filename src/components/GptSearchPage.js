import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSugesstion from './GptMovieSugesstion';
import { BG_IMG } from '../utils/mockData';

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMG}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSugesstion />
    </div>
  );
}

export default GptSearchPage;