import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/mockData';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
   const dispatch = useDispatch();
   // Fetching Trailer Video and Updating Store with Trailer Video
   const getMovieVideos = async () => {
     const data = await fetch(
         "https://api.themoviedb.org/3/movie/792307/videos?language=en-US",
       options
     );
     const json = await data.json();
     //console.log(json);

     const trailer = json.results[13];
     //console.log(trailer);
     dispatch(addTrailerVideo(trailer));
   };

   useEffect(() => {
     getMovieVideos();
   }, []);
}

export default useMovieTrailer;