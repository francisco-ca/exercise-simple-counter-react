import React, { useState, useEffect } from 'react';
const MyTimerDM = () =>
{
   const [secondsDM, setSecondsDM] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setSecondsDM(secondsDM => secondsDM + 1);
    }, 10000000);
    return () => clearInterval(interval);
  }, []);
  return(
    <div>
    {secondsDM %10}
   </div>
)
}

export default MyTimerDM