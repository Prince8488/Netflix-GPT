import { BASE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 mr-4">
      <img src={BASE_URL + posterPath} alt="movie" />
    </div>
  );
};

export default MovieCard;
