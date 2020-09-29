import React, { useState, useEffect } from 'react';


const MyTimer = () =>
{




  const [seconds, setSeconds] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    return(
    <div>
    {seconds %10}
   
   </div>
)
}

export default MyTimer