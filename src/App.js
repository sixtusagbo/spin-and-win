import { useState } from 'react';
import './App.css';
import { prizesDim } from './config';

function App() {
  const [value, setValue] = useState(Math.ceil(Math.random() * 3600));

  const handleSpin = () => {
    const wheel = document.querySelector('.wheel');

    wheel.style.transform = `rotate(${value}deg)`;
    setValue((prevValue) => (prevValue += Math.ceil(Math.random() * 3600)));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="spin-btn" onClick={handleSpin}>
          Spin
        </div>
        <div className="wheel">
          {prizesDim.map((prize, i) => (
            <div
              key={i}
              className="prize"
              style={{ '--index': i + 1, '--bgColor': prize.bgColor }}>
              <span>{prize.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;