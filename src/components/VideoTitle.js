import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-16 md:pt-36 px-7 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="mt-2 bg-white text-black py-2 md:py-4 px-4 md:px-12 text-xl font-semibold bg-opacity-50 rounded-lg">
          ▶️Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-4">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;