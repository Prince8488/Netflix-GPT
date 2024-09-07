import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { trailerVideo } from "../utils/movieSlice";

const useFetchVideoById = (id) => {
  const dispatch = useDispatch();
  const fetchVideoById = async () => {
    console.log("id", id);
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
    fetchVideoById();
  }, []);
};

export default useFetchVideoById;
