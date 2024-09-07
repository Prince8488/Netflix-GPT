import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginInInfo = useSelector((store) => store.user);

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
  return (
    <div className="bg-black min-h-full max-w-full bg-opacity-50 flex flex-wrap align-middle justify-between">
      <div className="ml-5 ">
        <img className=" h-20 w-40" src={APP_LOGO} alt="logo" />
      </div>
      {loginInInfo && (
        <div className="mr-2 flex">
          <img
            className=" h-10 w-10 mt-5"
            src={loginInInfo.photoURL}
            alt="user-icon"
          />
          <button className="m-5 font-bold text-white" onClick={handleSignout}>
            Hello, {loginInInfo.displayName} &nbsp; (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
