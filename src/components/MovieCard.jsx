import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath)return null;
  return (
     
    <img className="w-55 p-2 rounded-lg transition-transform duration-200 hover:-translate-y-1 hover:scale-95 cursor-pointer " alt="movieCard" src={IMG_CDN_URL + posterPath}></img>
  );
};

export default MovieCard;
