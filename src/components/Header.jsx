import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";
const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
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
    return ()=>unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute px-8 py-2 z-50 w-screen bg-gradient-to-b from-black via-black/90 flex justify-between items-center">
      <img
        className="w-44"
        src={LOGO_URL}
      ></img>
      {user && (
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white font-bold rounded p-2 mr-6 text-center hover:bg-red-700 cursor-pointer"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
