import React, { useState, useEffect } from 'react';
const MyTimerD = () =>
{
   const [secondsD, setSecondsD] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setSecondsD(secondsD => secondsD + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return(
    <div>
    {secondsD %10}
   </div>
)
}

export default MyTimerD