import React, { useEffect, useState } from "react";

function CurrentDateTime() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);


const formatDaySuffix = (date: number) => {
  if (date > 3 && date < 21) return "th";
  switch (date % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatDate = (date: Date) => {
    const day = date.toLocaleString("en-US", {weekday: 'short'});
    const dateNum = date.getDate();
    const time = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit'});
    
    return `${day}, ${dateNum}${formatDaySuffix(dateNum)} ${time}`;
  }

  return (
    <div>
       {formatDate(currentDate)}
    </div>
  );
}


export default CurrentDateTime;
