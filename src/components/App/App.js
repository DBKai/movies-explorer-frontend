import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import { useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  function onLogout() {
    setIsLoggedIn(false);
    navigate('/');
  }
  function onLogin() {
    setIsLoggedIn(true);
    navigate('/movies');
  }
  return (
    <CurrentUserContext.Provider value={isLoggedIn}>      
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/movies' element={ <Movies /> } />
        <Route path='/saved-movies' element={ <SavedMovies /> } />
        <Route path='/profile' element={ <Profile onLogout={onLogout} /> } />
        <Route path='/signup' element={ <Register /> } />
        <Route path='/signin' element={ <Login onLogin={onLogin}/> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
