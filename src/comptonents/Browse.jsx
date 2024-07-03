// import { useSelector } from "react-redux";

import useNowPlayMovie from "../Hooks/useNowPlayMovies";
import Header from "./Header";
import ListMovies from "./ListMovies";
import MovieTrailer from "./MovieTrailer";


const Browse = () => {
  // const userInfo=useSelector((store)=>store.user)
  useNowPlayMovie();
 
  return (
    <>
      <Header btn={false} />
      <MovieTrailer/>
      <ListMovies/>
    </>
  );
};

export default Browse;
