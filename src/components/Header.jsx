import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import {  useSelector } from "react-redux";

import { useNavigate } from "react-router";
const Header = () => {
  
  const user = useSelector(store => store.user)


  const navigate = useNavigate();


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };



  return (
    <div className="absolute px-8 py-2 z-10  w-screen bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className="w-44 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      {user && (
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white font-bold rounded p-2 text-center hover:bg-red-700 cursor-pointer"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
