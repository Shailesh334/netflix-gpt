
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTvSeries from '../hooks/useTvSeries';
import useAiringToday from '../hooks/useAiringToday';

const Browse = () => {

  useNowPlayingMovie();
  usePopularMovies();
  useTvSeries();
  useAiringToday();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
