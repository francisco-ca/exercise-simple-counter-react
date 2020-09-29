import React, { useState, useEffect } from 'react';
const MyTimerM = () =>
{
   const [secondsM, setSecondsM] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setSecondsM(secondsM => secondsM + 1);
    }, 1000000);
    return () => clearInterval(interval);
  }, []);
  return(
    <div>
    {secondsM %10}
   </div>
)
}

export default MyTimerM