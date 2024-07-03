import { useDispatch } from "react-redux";
import { Fixed_Option } from "../utils/constants";
import { addTrailerId } from "../Redux/movieSlice";
import { useEffect } from "react";

const useTrailerId = (id) => {
  console.log(id);
  const dispatch = useDispatch();
  const moviesTrailerData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "+/videos?language=en-US",
      Fixed_Option
    );
    const json = await data.json();
    // console.log(json);
    const filterTrailers = json.results.filter((ved) => {
      return ved.type === "Trailer";
    });
    console.log(filterTrailers);
    const trailer =
      filterTrailers.length === 0 ? json.results[0] : filterTrailers[1];
    // console.log(trailer);
    dispatch(addTrailerId(trailer.key));
  };
  useEffect(() => {
    moviesTrailerData();
  }, []);
};

export default useTrailerId;
