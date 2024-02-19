import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/mockData';
import { addTvSeries } from '../utils/movieSlice';

const useTvSeries = () => {
   const dispatch = useDispatch();
   const getTvSeries = async () => {
     const data = await fetch(
       "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
       options
     );

     const json = await data.json();
     //console.log(json.results);
     dispatch(addTvSeries(json.results));
   };

   useEffect(() => {
     getTvSeries();
   }, []);
}

export default useTvSeries;