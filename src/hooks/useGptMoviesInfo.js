import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieInfos } from "../utils/gptSlice";
import { useEffect } from "react";

const useGptMoviesInfo = () => {
  const { movieNames  } = useSelector((store) => store.gpt.gptMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieNames) return;

    const fetchMovieInfo = async () => {
      const movieInfos = await Promise.all(
        movieNames.map(async (movie) => {
          const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
            API_OPTIONS
          );
          const json = await data.json();
          return json.results;
        })
      );

      dispatch(addMovieInfos(movieInfos));
    };

    fetchMovieInfo();
  }, [movieNames, dispatch]); // ✅ Only runs when movieNames changes
};


export default useGptMoviesInfo;