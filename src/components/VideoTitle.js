const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative px-10 pt-[20%] aspect-video w-screen h-screen bg-gradient-to-r from-black">
      <h1 className="text-4xl w-1/3 font-bold text-white">{title}</h1>
      <h1 className="py-6 text-lg w-1/3 text-white">{overview}</h1>

      <div>
        <button className="bg-white text-black font-bold p-2 px-10 text-sm rounded hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 ml-5 text-white font-bold p-2 px-10 text-sm rounded hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
