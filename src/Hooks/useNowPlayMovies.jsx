import { useDispatch } from "react-redux";
import { Fixed_Option } from "../utils/constants";
import { addMovie } from "../Redux/movieSlice";
import { useEffect } from "react";


const useNowPlayMovie=()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        Fixed_Option
      );
      const json = await data.json();
      dispatch(addMovie(json.results));
    //   console.log(json.results);
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayMovie;