import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  let [timer, settimer] = useState(10);
  const [timerexpired, settimerExpired] = useState(false);
  const [counter, setCounter] = useState(0);
  const increCounter = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        settimer(timer - 1);
      }, 1000);
    } else {
      settimerExpired(true);
    }
    if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="App">
      <h5>No of clicks untill timer expires</h5>
      <div className="content">
        <div className="counter">{counter}</div>
        <div className="timer">Time left: {timer} seconds</div>
        {!timerexpired && <button onClick={increCounter}>+</button>}
      </div>
    </div>
  );
}
