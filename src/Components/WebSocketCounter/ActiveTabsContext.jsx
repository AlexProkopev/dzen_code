import { createContext, useState, useEffect, useRef } from "react";
import { socket } from "./socket";

export const ActiveTabsContext = createContext();

export const ActiveTabsProvider = ({ children }) => {
  const [activeTabs, setActiveTabs] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    const handler = (count) => {
      if (count !== prevCount.current) {
        prevCount.current = count;
        setActiveTabs(count);
      }
    };

    socket.on("activeConnections", handler);
    return () => socket.off("activeConnections", handler);
  }, []);

  return (
    <ActiveTabsContext.Provider value={activeTabs}>
      {children}
    </ActiveTabsContext.Provider>
  );
};
