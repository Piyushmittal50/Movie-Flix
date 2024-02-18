import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
    </div>
  );
};
export default Browse;