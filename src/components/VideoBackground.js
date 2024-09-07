import { useSelector } from "react-redux";
import useFetchVideoById from "../hooks/useFetchVideoById";

const VideoBackground = (id) => {
  useFetchVideoById(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) return;
  return (
    <div className="absolute">
      <iframe
        className="w-screen h-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; muted"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
