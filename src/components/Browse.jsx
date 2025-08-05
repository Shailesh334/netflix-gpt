import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTvSeries from "../hooks/useTvSeries";
import useAiringToday from "../hooks/useAiringToday";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gptSearchView  = useSelector(store => store.gpt.gptSearchView);


  useNowPlayingMovie();
  usePopularMovies();
  useTvSeries();
  useAiringToday();

  return (
    <div>
      <Header />
      
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
