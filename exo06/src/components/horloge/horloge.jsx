import { useState } from "react";
import { useEffect } from "react";

function Horloge() {
  const [time, setTime] = useState(new Date());
  

  useEffect(() => {
    const time = setInterval(() => {
      setTime(new Date());
    }, 200);

    return () => {
        clearInterval(time)
    };
  });
  const hours = time.getHours().toString().padStart(2, 0);
  const minutes = time.getMinutes().toString().padStart(2, 0);
  const secondes = time.getSeconds().toString().padStart(2, 0);

  return (
    <div>
      <p>Chrono : {hours}H {minutes}M {secondes}S</p>
    </div>
  );
}

export default Horloge;
