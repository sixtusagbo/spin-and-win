import { Route, Routes } from 'react-router-dom';
import './App.css';
import CoreLayout from './layouts/CoreLayout';
import Spin from './pages/Spin';
import PreAuthLayout from './layouts/PreAuthLayout';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PersistLogin from './layouts/PersistLogin';

function App() {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route element={<CoreLayout />}>
          <Route path="/" element={<Spin />} />
        </Route>
        <Route element={<PreAuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
