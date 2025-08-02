import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    <div className=' bg-black text-white '>

      <div className='relative -mt-70 z-50 px-10'>
           <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies}/>
           <MovieList title="Top Rated Movies" movies={movies.popularMovies}/>
           <MovieList title="TV Series" movies={movies.tvSeries}/>
           <MovieList title="Airing Today" movies={movies.airingToday}/>
         
      </div>
       
    </div>
  )
}

export default SecondaryContainer
