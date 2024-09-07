import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSignIn = () => {
    setToggleSignIn(!toggleSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!toggleSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          setErrorMsg(error.code + " " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user => ", user);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.code + " " + error.message);
        });
    }
  };

  return (
    <div className=" relative min-h-screen max-w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg')]">
      <div className=" h-14  text-white min-h-screen">
        <div className="bg-black min-h-full max-w-full bg-opacity-50">
          <Header />;
          <div className="isolatepx-6 lg:px-8 min-w-96 max-w-lg m-auto block bg-black p-16 bg-opacity-70">
            <div
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true"
            ></div>
            <div className="mx-auto my-auto max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">
                {toggleSignIn ? "Sign In" : "Sign Up"}
              </h2>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mx-auto max-w-xl sm:mt-4"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <div className="mt-0">
                    {!toggleSignIn && (
                      <input
                        ref={name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        autoComplete="name"
                        className="block w-full h-14 rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-20"
                      />
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-0">
                    <input
                      ref={email}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      autoComplete="email"
                      className="block w-full h-14 rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-20"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-0">
                    <input
                      ref={password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      autoComplete="password"
                      className="block w-full h-14 rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-20"
                    />
                  </div>
                </div>
                {errorMsg && (
                  <div className="sm:col-span-2">
                    <div className="mt-1">
                      <p className="p-4 bg-red-700 w-full rounded-lg">
                        {errorMsg}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  onClick={() => handleButtonClick()}
                  className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {toggleSignIn ? "Sign In" : "Sign Up"}
                </button>
                <p href="#" className="text-gray-300 flex mt-5">
                  {toggleSignIn ? "New to Netflix" : "Already have an account"}
                  ?&nbsp;
                  <span
                    className="font-bold text-white-600 cursor-pointer"
                    onClick={() => handleToggleSignIn()}
                  >
                    {toggleSignIn ? "Sign Up" : "Sign In"}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
