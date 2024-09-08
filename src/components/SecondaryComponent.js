import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const recentMovies = useSelector((store) => store?.movies);
  if (!recentMovies) return;
  return (
    <div className="bg-black">
      <div className="-mt-72 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={recentMovies.nowPlayingMovies}
        />
        <MovieList title={"Trending"} movies={recentMovies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={recentMovies.nowPlayingMovies} />
        <MovieList
          title={"New Videos"}
          movies={recentMovies.nowPlayingMovies}
        />
        ;
      </div>
    </div>
  );
};

export default SecondaryContainer;
