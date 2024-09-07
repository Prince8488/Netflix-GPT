import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const loginInInfo = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="bg-black min-h-full max-w-full bg-opacity-50 flex flex-wrap align-middle justify-between ">
      <div className="ml-5 ">
        <img
          className=" h-20 w-40"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
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
