import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value , password.current.value);

    setErrorMessage(message);
  };
  return (
    <div>
      <Header />

      <div className="relative h-screen w-full">
        {/* Background Image */}
        <img
          className="absolute h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/IN-en-20250721-TRIFECTA-perspective_f34fb505-ef25-45d9-9aab-03cb2474de75_small.jpg"
          alt="bg"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Login Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute right-0 left-0 p-12 w-[400px]  my-36 mx-auto z-20 bg-black bg-opacity-80 rounded text-white"
        >
          <h1 className="text-3xl font-bold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              placeholder="Full Name"
              type="text"
              className=" text-white bg-gray-700 p-4 w-full mb-6 rounded"
            />
          )}

          <input
            ref={email}
            placeholder="Email Address"
            type="text"
            className=" text-white bg-gray-700  p-4 w-full mb-6 rounded "
          />
          <input
            ref={password}
            placeholder="Password"
            type="password"
            className=" text-white bg-gray-700 p-4 w-full mb-6 rounded"
          />
          <p className="text-red-600 p-2 my-2">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="bg-red-500 font-bold text-white w-full p-2 cursor-pointer hover:bg-red-700 rounded"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-500 my-2 py-3">
            {isSignIn ? "New to Neflix?" : "Already registered?"}

            <Link className="text-white hover:underline" onClick={toggleSignUp}>
              {isSignIn ? "Sign Up Now." : "Sign In."}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
