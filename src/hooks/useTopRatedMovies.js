import React from 'react'
import { options } from '../utils/mockData';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );

      const json = await data.json();
      //console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
      getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;