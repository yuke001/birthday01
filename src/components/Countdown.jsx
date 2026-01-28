/* 
import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown({ onBirthdayReached, birthdayReached }) {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [prevTime, setPrevTime] = useState({
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    if (birthdayReached) return;

    const targetDate = new Date("2026-01-23T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate - now);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ hours, minutes, seconds });

      if (diff <= 0 && !birthdayReached) {
        onBirthdayReached();
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [onBirthdayReached, birthdayReached]);

  useEffect(() => {
    setPrevTime(time);
  }, [time]);

  const Digit = ({ value, label, prevValue }) => {
    const shouldFlip = prevValue !== null && prevValue !== value;
    return (
      <div className="digit">
        <div className={`card ${shouldFlip ? "flip" : ""}`}>
          <div className="text">{String(value).padStart(2, "0")}</div>
        </div>
        <div className="label">{label}</div>
      </div>
    );
  };

  // ... (rest of the original UI logic)
*/

// NEW CENTERED UI
function Countdown() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw' 
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Working on something
      </h1>
    </div>
  );
}

export default Countdown;
