import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailer);

  // fetch trailer and add it to store
  useTrailer(movieId);

  

  return (
    <div className=" w-full h-full overflow-hidden">
      <iframe
        className="w-full aspect-video overflow-x-hidden overflow-y-hidden"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailer?.key}`}
        title="YouTube video player"
       
        
    
      />
    </div>
  );
};

export default VideoBackground;
