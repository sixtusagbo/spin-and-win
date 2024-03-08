import { useState } from 'react';
import { prizesDim } from '../config';
import useLogout from '../hooks/useLogout';
import useAuth from '../hooks/useAuth';
import axios, { axiosAuth } from '../api/axios';
import useAxiosAuth from '../hooks/useAxiosAuth';

const Spin = () => {
  const [value, setValue] = useState(Math.ceil(Math.random() * 3600));
  const logout = useLogout();
  const { auth, setAuth } = useAuth();
  const axiosAuth = useAxiosAuth();

  const handleSpin = async () => {
    const spins = auth?.spins;
    if (spins < 1) {
      alert('You have no spin left, try again next year 🤷‍♀️😂');
      return;
    }

    const wheel = document.querySelector('.wheel');

    wheel.style.transform = `rotate(${value}deg)`;
    setValue(Math.ceil(Math.random() * 3600));

    setAuth({ ...auth, spins: 0 });

    await axiosAuth.post(
      '/spins/',
      JSON.stringify({
        outcome: 'false',
      })
    );
  };

  return (
    <div className="wrapper">
      {/* <button onClick={logout} className="logoutBtn">
        Logout
      </button> */}
      <h1 style={{ alignSelf: 'center', marginBottom: '40px', color: '#fff' }}>
        You have {auth?.spins} spins left
      </h1>
      <div className="container">
        <div className="spin-btn" onClick={() => handleSpin()}>
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
