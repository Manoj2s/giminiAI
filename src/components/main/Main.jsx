import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    input,
    setInput,
    resultData,
  } = useContext(context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="usericon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Manoj.</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            <div className="cards_box">
              <div className="card">
                <p>
                  Recommend new types of water sports, including pros & cons.
                </p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>
              <div className="card">
                <p>Compare the differences between pickleball and tennis.</p>
                <img src={assets.bulb_icon} alt="bulb_icon" />
              </div>
              <div className="card">
                <p>
                  Outline an organized & logical sales pitch for a new product?
                </p>
                <img src={assets.message_icon} alt="message_icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code.</p>
                <img src={assets.code_icon} alt="code_icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result_title">
              <img src={assets.user_icon} alt="user_icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result_data">
              <img src={assets.gemini_icon} alt="gemini_icon" />
              {loading ? (
                <dir className="loader">
                  <hr />
                  <hr />
                  <hr />
                </dir>
              ) : (
                <p>{resultData}</p>
              )}
            </div>
          </div>
        )}

        <div className="main_bottom">
          <div className="search_box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img onClick={onSent} src={assets.send_icon} alt="send_icon" />
            </div>
          </div>
          <p>
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
