import React from "react";

import MovieList from "./MovieList";

import useGptMoviesInfo from "../hooks/useGptMoviesInfo";
import { useSelector } from "react-redux";

const GptMovieRecommendation = () => {
  useGptMoviesInfo();
  const { movieInfos, movieNames } = useSelector(
    (store) => store.gpt.gptMovies
  );
  console.log(movieInfos);
  console.log(movieNames);
  if (!movieNames || !movieInfos) return;

  return (
    <div className="-mt-120 ml-12 ">
      {movieInfos.map((info, index) => (
        <MovieList
          key={movieNames[index]}
          title={movieNames[index]}
          movies={info}
        />
      ))}
    </div>
  );
};

export default GptMovieRecommendation;
