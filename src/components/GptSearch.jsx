import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearch = () => {

  const selectedLang = useSelector(store => store.config.langSelected)
  return (
    <div className="relative h-screen w-screen">
      <img
        className="absolute h-full w-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/IN-en-20250721-TRIFECTA-perspective_f34fb505-ef25-45d9-9aab-03cb2474de75_small.jpg"
        alt="bg"
      />

      <div className="flex justify-center items-center h-full">
        <form className="w-full max-w-2xl px-4 flex" onSubmit={e=>e.preventDefault()}>
          <input
            type="text"
            placeholder={lang.inputText[selectedLang]}
            className="w-full py-4 px-6 text-xl  shadow-md border rounded-l-lg  border-gray-300  bg-white bg-opacity-90"
          />
          <button className="bg-red-700 px-6 rounded-r-lg text-white  text-2xl hover:bg-red-500 cursor-pointer"> {lang.search[selectedLang]}</button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
