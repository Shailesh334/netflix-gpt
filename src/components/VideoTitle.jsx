import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute z-10 pt-80 px-20 text-white bg-gradient-to-tr from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-md w-1/4 py-2">{overview}</p>
      <div className="flex pt-4">
        <button className="bg-white px-6 py-2 text-black text-lg rounded  cursor-pointer hover:opacity-80">
        ▷ Play
        </button>

        <button className="bg-gray-500 px-4 py-2 text-white text-lg rounded bg-opacity-50 mx-2 cursor-pointer hover:opacity-80">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
