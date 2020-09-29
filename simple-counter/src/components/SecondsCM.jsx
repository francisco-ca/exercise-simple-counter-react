import React, { useState, useEffect } from 'react';
const MyTimerCM = () =>
{
   const [secondsCM, setSecondsCM] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setSecondsCM(secondsCM => secondsCM + 1);
    }, 100000000);
    return () => clearInterval(interval);
  }, []);
  return(
    <div>
    {secondsCM %10}
   </div>
)
}

export default MyTimerCM