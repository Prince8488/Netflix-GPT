import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovie = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 text-white">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovie;
