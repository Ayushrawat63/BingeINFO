import { useSelector } from "react-redux"
import MovieTitle from "./MovieTitle";
import MovieBackground from "./MovieBackground";


const MovieTrailer = () => {
    const movies=useSelector((store)=>store.movie?.movieData)
    if(movies===null)return;
    console.log(movies);
    // const val=Math.ceil(Math.random());
    // console.log(val);
    const movie=movies[0];
    console.log(movie);

  return (
    <div>
        <MovieTitle title={movie.original_title} overview={movie.overview}/>
        <MovieBackground id={movie.id}/>
    </div>
  )
}

export default MovieTrailer
