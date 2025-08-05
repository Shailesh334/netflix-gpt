import { Groq } from "groq-sdk";



const useGptApi = async (input) => {
  const query =
    "Act as a movie reccomendation system and suggest five movies for query :" +
    input +
    ".give only five movie names seperated with commas like in the example given above. example : gadar , kill , animal , vikram , coolie ";

 

  const groq = new Groq({ apiKey: import.meta.env.VITE_API_KEY , dangerouslyAllowBrowser: true });

  
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: query,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

     const movieNames = chatCompletion.choices[0]?.message?.content.split(",");
     return movieNames;
  
};

export default useGptApi;
