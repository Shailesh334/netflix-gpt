import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useRef } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.gptSearchView);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lang = useRef(null);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  const handleLangChange = () => {
    dispatch(changeLanguage(lang.current.value));
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        dispatch(
          addUser({
            email: email,
            displayName: displayName,
            photoURL: photoURL,
            uid: uid,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute px-8 py-2 z-50 inset-x-0 bg-gradient-to-b from-black via-black/90 flex justify-between items-center">
      <img className="w-44" src={LOGO_URL}></img>
      {user && (
        <div>
          {gptSearchView && (
            <select
              className="bg-gray-500 py-2 px-4 rounded-lg m-4"
              ref={lang}
              onChange={handleLangChange}
            >
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </select>
          )}

          <button
            onClick={handleGptSearchClick}
            className="bg-gray-900 text-white font-bold rounded p-2 px-4 mx-6 text-center hover:bg-gray-800 cursor-pointer"
          >
            {gptSearchView ? "🏠 Home" : "💭Ask GPT"}
          </button>

          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white font-bold rounded p-2 px-4 mx-8 text-center hover:bg-red-700 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
