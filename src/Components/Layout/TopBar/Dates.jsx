import { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";

function Dates() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

const weekday = currentTime.toLocaleDateString("ru-RU", { weekday: "long" });
const restDate = currentTime.toLocaleDateString("ru-RU", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

  const formattedTime = currentTime.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <section className="date-time">
     <div>
       <time className="date " dateTime={currentTime.toISOString()}>
        {weekday}
      </time>
       <time className="date " dateTime={currentTime.toISOString()}>
        {restDate}
      </time>
     </div>
     

      <span className="time d-flex  align-items-center">
        <IoTimeOutline className="icon-date text-success" />
        <time dateTime={currentTime.toISOString()}>{formattedTime}</time>
      </span>
    </section>
  );
}

export default Dates;
