import GptMovie from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className=" relative min-h-screen max-w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg')]">
      <div className="bg-black bg-opacity-65 min-h-screen max-w-full">
        <GptSearchBar />
        <GptMovie />
      </div>
    </div>
  );
};

export default GptSearch;
