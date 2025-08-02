import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("popular" , movies);
  return (
    <> 
    <div >
      <h1 className="text-2xl font-bold p-2 my-3">{title}</h1>
      <div >
        <div className="flex overflow-x-scroll no-scrollbar-custom ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default MovieList;
