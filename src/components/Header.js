import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true);

  const handleToggleSignIn = () => {
    setToggleSignIn(!toggleSignIn);
  };

  return (
    <div className=" h-14  text-white min-h-screen">
      <div className="bg-black min-h-full max-w-full bg-opacity-50">
        <img
          className=" h-20 w-40"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <div className="isolatepx-6 lg:px-8 min-w-96 max-w-lg m-auto block bg-black p-16">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">
              {toggleSignIn ? "Sign In" : "Sign Up"}
            </h2>
          </div>
          <form className="relative mx-auto max-w-xl sm:mt-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  {!toggleSignIn && (
                    <input
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
                <div className="mt-2.5">
                  <input
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
                <div className="mt-2.5">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="password"
                    className="block w-full h-14 rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black bg-opacity-20"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
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
  );
};
export default Header;
