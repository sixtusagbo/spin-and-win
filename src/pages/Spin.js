import { useState } from 'react';
import { prizesDim } from '../config';

const Spin = () => {
  const [value, setValue] = useState(Math.ceil(Math.random() * 3600));

  const handleSpin = () => {
    const wheel = document.querySelector('.wheel');

    wheel.style.transform = `rotate(${value}deg)`;
    setValue(Math.ceil(Math.random() * 3600));
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
              style={{
                '--index': i + 1,
                '--bgColor': prize.bgColor,
                clipPath: prize.isWin ? 'var(--clip-sm)' : 'var(--clip-lg)',
              }}>
              <img src={prize.image} alt="spin-entry" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spin;
