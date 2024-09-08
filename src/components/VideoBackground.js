import { useSelector } from "react-redux";
import useFetchVideoById from "../hooks/useFetchVideoById";

const VideoBackground = (id) => {
  useFetchVideoById(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) return;
  return (
    <div className="absolute w-screen h-screen aspect-video">
      <iframe
        className="w-screen h-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; muted"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
