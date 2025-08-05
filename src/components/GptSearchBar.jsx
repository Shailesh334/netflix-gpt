import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import useGptApi from "../hooks/useGptApi";
import { addMovieNames } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.langSelected);
  const dispatch = useDispatch();
  const input = useRef();

  const handleGptSearchBtn = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const movieNames = await useGptApi(input.current.value);
    dispatch(addMovieNames(movieNames));
  };

  return (
    <div className="relative h-screen w-screen">
      <img
        className="fixed h-full w-full object-cover -z-10 opacity-90"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/IN-en-20250721-TRIFECTA-perspective_f34fb505-ef25-45d9-9aab-03cb2474de75_small.jpg"
        alt="bg"
      />

      <div className="flex justify-center items-center ">
        <form
          className="w-full max-w-2xl px-4 flex mt-44"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={input}
            type="text"
            placeholder={lang.inputText[selectedLang]}
            className="w-full py-4 px-6 text-xl  shadow-md border rounded-l-lg  border-gray-300  bg-white bg-opacity-90"
          />
          <button
            onClick={handleGptSearchBtn}
            className="bg-red-700 px-6 rounded-r-lg text-white  text-2xl hover:bg-red-500 cursor-pointer"
          >
            {lang.search[selectedLang]}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
