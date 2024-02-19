import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from "../utils/movieSlice";
import { options } from '../utils/mockData';

const useUpcomingMovies = () => {
   const dispatch = useDispatch();
   const getUpcomingMovies = async () => {
     const data = await fetch(
       "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
       options
     );

     const json = await data.json();
     //console.log(json.results);
     dispatch(addUpcomingMovies(json.results));
   };

   useEffect(() => {
     getUpcomingMovies();
   }, []);
}

export default useUpcomingMovies;