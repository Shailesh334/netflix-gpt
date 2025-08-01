import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignInAndSignUp = () => {
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);
    if (name === null) {
      setErrorMessage("Enter a valid full name");
      return;
    }

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { email, displayName, photoURL, uid } = auth.currentUser;
              dispatch(
                addUser({
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                  uid: uid,
                })
              );
            })
            .catch((error) => {
              console.log(error);
              navigate("/error");
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
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
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
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
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {/* Name  */}
          {!isSignIn && (
            <input
              ref={name}
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
            onClick={handleSignInAndSignUp}
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
