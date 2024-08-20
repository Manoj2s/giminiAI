import { createContext, useState } from "react";
import run from "../config/geminiAI";

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);

  const delayPara = (index, nextElement) => {
    setTimeout(() => {
      setResultData((prev) => [...prev, nextElement]);
    }, 150 * index);
  };

  const onSent = async () => {
    setResultData([]);
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPrompt(prev => [...prev, input])

    const response = await run(input);

    let responseArray = response.split("**");
    let newResponse = responseArray.map((part, index) => {
      if (index % 2 === 1) {
        return <b key={index}>{part}</b>;
      } else {
        return part;
      }
    });

    let finalResponse = newResponse.flatMap((part, index) =>
      typeof part === "string"
        ? part.split("*").map((text, i) => (
            <span key={`${index}-${i}`}>
              {text}
              <br />
            </span>
          ))
        : [part]
    );

    finalResponse.forEach((element, i) => {
      delayPara(i, element);
    });

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    input,
    setInput,
    resultData,
  };

  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
