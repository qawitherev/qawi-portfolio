import logo from "./logo.svg";
import "./App.css";
import { Portfolio } from "./pages/Portfolio";
import { createContext, useState, useEffect } from "react";

export const WindowSizeContext = createContext();

const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState("lg");

  const handleResize = () => {
    const width = window.innerWidth;

    if (width > 1536) {
      setWindowSize("2xl");
    } else if (width > 1280) {
      setWindowSize("xl");
    } else if (width > 1024) {
      setWindowSize("lg");
    } else if (width > 768) {
      setWindowSize("md");
    } else if (width > 640) {
      setWindowSize("sm");
    } else {
      setWindowSize("max-sm");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <WindowSizeContext.Provider value={{ windowSize }}>
        {children}
      </WindowSizeContext.Provider>
    </>
  );
};

function App() {
  return (
    <>
      <WindowSizeProvider>
        <Portfolio />
      </WindowSizeProvider>
    </>
  );
}

export default App;
