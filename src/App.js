import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Utilisez BrowserRouter ici
import Login from './components/login';
import Signup from './components/signin';
import Feed from './components/feed';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter> {/* Utilisez BrowserRouter */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/feed" element={<Feed userImage={localStorage.getItem('userImage')}
          username={localStorage.getItem('username')}
          bio={localStorage.getItem('bio')} />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
