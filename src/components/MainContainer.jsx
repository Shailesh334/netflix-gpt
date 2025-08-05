import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    
    if(!movies)return;

      
    const movie = movies.filter(movie => movie.original_title === "Karate Kid: Legends");
  console.log(movie);
    
    const {original_title , overview , id} = movie[0];
   
  return (
    <div >
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;
