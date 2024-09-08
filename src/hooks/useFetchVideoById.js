import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { trailerVideo } from "../utils/movieSlice";

const useFetchVideoById = (id) => {
  const dispatch = useDispatch();
  const fetchVideos = useSelector((store) => store.movies.trailerVideo);
  const fetchVideoById = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id.movieId.toString() + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filterMovie = json?.results?.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = filterMovie.length ? filterMovie[0] : json.results[0];
    dispatch(trailerVideo(trailer));
  };

  useEffect(() => {
    !fetchVideos && fetchVideoById();
  }, []);
};

export default useFetchVideoById;
