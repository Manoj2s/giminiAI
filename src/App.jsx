// App.js
import React from "react";
import ContextProvider from "./context/Context";
import Main from "./components/main/Main";

function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
