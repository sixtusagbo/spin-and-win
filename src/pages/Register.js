import { useState } from 'react';
import styled from 'styled-components';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  transition: 0.3s;
  &:focus {
    border-color: #000;
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: 0.3s;
  &:hover {
    background-color: #333;
  }
`;

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && username && password) {
      // Make signup request to backend api
      try {
        const response = await axios.post(
          '/users/create',
          JSON.stringify({
            name: name,
            username: username,
            password: password,
          })
        );

        console.log(response);
        const accessToken = response.data?.token;
        const userId = response.data?.id;
        const spins = response.data?.spins;
        const auth = { accessToken, userId, spins };
        localStorage.setItem('remember', true);
        localStorage.setItem('ziox', JSON.stringify(auth));
        setAuth(auth);
        navigate('/', { replace: true });

        // Clear the input fields
        setName('');
        setUsername('');
        setPassword('');
      } catch (err) {
        console.error(err);
        alert(err.toString());
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Continue</Button>
        <p>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
