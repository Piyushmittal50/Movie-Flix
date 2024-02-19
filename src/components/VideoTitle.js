import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl font-semibold bg-opacity-50 rounded-lg">
          ▶️Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-4">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;