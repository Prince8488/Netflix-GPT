import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log("movies", movies);
  return (
    <div>
      <p className="font-bold text-lg px-5 py-2 text-white">{title}</p>
      <div className="flex overflow-x-scroll">
        <div className="flex m-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
