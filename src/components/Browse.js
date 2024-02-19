import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTvSeries from "../hooks/useTvSeries";
const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
    </div>
  );
};
export default Browse;