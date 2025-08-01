
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailer = (movieId) => {
   
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?', API_OPTIONS)
    const json = await data.json();

    const displayVideos = json?.results?.filter(
      (video) =>
        video.type === "Trailer" &&
        video.site === "YouTube" &&
        (video.official ||
          video?.name.toLowerCase().includes("official trailer"))
    );

    const trailer = displayVideos?.length ? displayVideos[0] : json?.results[0];
 
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

};

export default useTrailer;
