import React from "react";
import CodeMateri from "./CodeMateri/CodeMateri";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
return (
  <>
    <GlobalProvider>
      <CodeMateri/>
    </GlobalProvider>
  </>
)
}

export default App