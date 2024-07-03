import { useSelector } from "react-redux";
import useTrailerId from "../Hooks/useTrailerId";

const MovieBackground = (prop) => {
  const id = useSelector((store) => store.movie?.trailerId);
  useTrailerId(prop.id);

  return (
    <div className="w-screen ">
      <iframe className="w-screen aspect-video   border-2 border-red-500"
        src={"https://www.youtube.com/embed/" + id +"?rel=0&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default MovieBackground;
