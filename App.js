import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import SignIn from './components/signin';
import Feed from './components/feed';
import Profile from './components/profile';
import { Navigate } from 'react-router-dom';

function App() {
  const [userImage, setUserImage] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/feed' element={<Feed />}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
