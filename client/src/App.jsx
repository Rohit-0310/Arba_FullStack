import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import MyStore from './components/MyStore/MyStore';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Login" element={<LogIn /> } />
        <Route path="/Signup" element={<SignUp /> } />
        <Route path="/MyStore" element={<MyStore /> } />
        <Route path="/Profile" element={<Profile /> } />
      </Routes>
    </div>
  );
}

export default App;
