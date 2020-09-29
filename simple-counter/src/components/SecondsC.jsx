import React, { useState, useEffect } from 'react';
const MyTimerC = () =>
{
   const [secondsC, setSecondsC] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setSecondsC(secondsC => secondsC + 1);
    }, 100000);
    return () => clearInterval(interval);
  }, []);
  return(
    <div>
    {secondsC %10}
   </div>
)
}

export default MyTimerC