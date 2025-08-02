



import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addTvSeries } from "../utils/moviesSlice";

const useTvSeries = () => {

    const dispatch = useDispatch();

  const getTvSeries = async () => {

    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?&page=1', API_OPTIONS)

    const json = await data.json();
    
    dispatch(addTvSeries(json.results));
    
  };
  useEffect(() => {
    getTvSeries();
  }, []);
};

export default useTvSeries;
