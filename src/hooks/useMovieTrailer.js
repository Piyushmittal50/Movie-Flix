import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../utils/mockData';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
   const dispatch = useDispatch();
  // Fetching Trailer Video and Updating Store with Trailer Video
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
   const getMovieVideos = async () => {
     const data = await fetch(
         "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
       options
     );
     const json = await data.json();
     //console.log(json);
     const filterData = json.results.filter((video) => video.type === "Trailer");
     const trailer = filterData.length ? filterData[0] : json.results[0];
     //console.log(trailer);
     dispatch(addTrailerVideo(trailer));
   };

  useEffect(() => {
     if(!trailerVideo) getMovieVideos();
   }, []);
}

export default useMovieTrailer;