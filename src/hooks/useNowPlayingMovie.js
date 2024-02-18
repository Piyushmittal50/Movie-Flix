import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/mockData";
import { useEffect } from "react";
const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );

    const json = await data.json();
    //console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovie;
// this hooks fetching all nowPlayingMovies and store it into our ReduxStore
