import styled from 'styled-components';

export const prizesDim = [
  {
    bgColor: '#FFB428',
    value: 10,
    image: '/images/you-think.png',
    isWin: false,
    retry: false,
  }, // Orange
  {
    bgColor: '#DD2F2F',
    value: 0,
    image: '/images/try-again.png',
    isWin: false,
    retry: true,
  }, // Red
  {
    bgColor: '#6F18AD',
    value: 10,
    image: '/images/red-gift-box.png',
    isWin: true,
    retry: false,
  }, // Indigo
  {
    bgColor: '#D1D116',
    value: 50,
    image: '/images/open-handed.png',
    isWin: false,
    retry: false,
  }, // Yellow
  {
    bgColor: '#27B127',
    value: 1,
    image: '/images/oops.png',
    isWin: false,
    retry: false,
  }, // Green
  {
    bgColor: '#CE1BCE',
    value: 5,
    image: '/images/pink-gift-box.png',
    isWin: true,
    retry: false,
  }, // Purple
  {
    bgColor: '#3030BD',
    value: 100,
    image: '/images/oops.png',
    isWin: false,
    retry: false,
  }, // Blue
  {
    bgColor: '#911691',
    value: 20,
    image: '/images/oops.png',
    isWin: false,
    retry: false,
  }, // Magenta
];

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Form = styled.form`
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

export const Input = styled.input`
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

export const Button = styled.button`
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
