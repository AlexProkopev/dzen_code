import { useContext, useState, useEffect, useRef } from "react";

import "./WebSocketCounter.css";
import { ActiveTabsContext } from "./ActiveTabsContext";

const WebSocketCounter = () => {
  const activeTabs = useContext(ActiveTabsContext);
  const [animate, setAnimate] = useState(false);
  const prevCount = useRef(activeTabs);

  useEffect(() => {
    if (activeTabs !== prevCount.current) {
      setAnimate(true);
      prevCount.current = activeTabs;
    }
  }, [activeTabs]);

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [animate]);

  return (
    <span className={`counter ${animate ? "animate" : ""}`}>
      Активных вкладок: {activeTabs}
    </span>
  );
};

export default WebSocketCounter;
