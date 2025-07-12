import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import "./WebSocketCounter.css";
import { socketUrl } from "../../api";

const WebSocketCounter = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const [animate, setAnimate] = useState(false);
  const prevCount = useRef(0);

  useEffect(() => {
    const socket = io(socketUrl);

    socket.on("activeConnections", (count) => {
      if (count !== prevCount.current) {
        setAnimate(true);
        prevCount.current = count;
        setActiveTabs(count);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
