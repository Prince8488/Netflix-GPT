import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginInInfo = useSelector((store) => store.user);
  const GptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when componnets unmounts
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="bg-black min-h-full max-w-full flex flex-wrap align-middle justify-between md:flex-row md:justify-between">
      <div className="ml-5 md:mx-0">
        <img className=" h-20 w-40" src={APP_LOGO} alt="logo" />
      </div>
      {loginInInfo && (
        <div className="mr-2 flex">
          {GptSearch && (
            <select
              className=" m-5 bg-black text-white outline"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" px-4 m-5 text-white bg-purple-600 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {GptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className=" h-10 w-10 mt-5"
            src={loginInInfo.photoURL}
            alt="user-icon"
          />
          <button className=" m-5 font-bold text-white" onClick={handleSignout}>
            Hello, {loginInInfo.displayName} &nbsp; (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
