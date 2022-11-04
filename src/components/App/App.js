import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import { useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUserInfo } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { REQUEST_USERDATA_ERROR } from '../../constants/constants';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
	const [isInfoTooltipOpened, setIsInfoTooltipOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: undefined,
    name: '',
    email: ''
  });
  const navigate = useNavigate();

  function closeInfoTooltip() {
    setIsInfoTooltipOpened(false);
    setInfoMessage('');
  }

  function fullLogout() {
    localStorage.clear();
    setCurrentUser({
      isLoggedIn: false,
      name: '',
      email: ''
    })
    navigate('/');
  }

  async function getCurrentUserInfo() {
    try {
      setIsLoading(true);
      const user = await getUserInfo();
      if (user.email) {
        setCurrentUser({ 
          isLoggedIn: true,
          name: user.name,
          email: user.email
        });
      }
    } catch (err) {
      if (err.message === '401') {
        fullLogout();
        return;
      }
      setInfoMessage(REQUEST_USERDATA_ERROR);
      setIsInfoTooltipOpened(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt !== null && jwt !== undefined) {
      getCurrentUserInfo();
    } else {
      setCurrentUser({
        isLoggedIn: false,
        name: '',
        email: ''
      });
    }
  }, [currentUser.isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}> 
        <Routes>
          <Route path='/' element={
            <Main />
          } />
          <Route path='/signup' element={
            <Register 
              setCurrentUser={setCurrentUser} 
              setIsLoading={setIsLoading} />
            } />
          <Route path='/signin' element={
            <Login 
              setCurrentUser={setCurrentUser} 
              setIsLoading={setIsLoading} />
            } />
          <Route element={<ProtectedRoute />}>
            <Route path='/movies' element={
              <Movies
                setInfoMessage={setInfoMessage}
                setIsInfoTooltipOpened={setIsInfoTooltipOpened}
                fullLogout={fullLogout} />
            } />
            <Route path='/saved-movies' element={
              <SavedMovies 
                setInfoMessage={setInfoMessage}
                setIsInfoTooltipOpened={setIsInfoTooltipOpened}
                fullLogout={fullLogout} />
            } />
            <Route path='/profile' element={
              <Profile 
                setCurrentUser={setCurrentUser} 
                setIsLoading={setIsLoading}
                setInfoMessage={setInfoMessage}
                setIsInfoTooltipOpened={setIsInfoTooltipOpened}
                fullLogout={fullLogout} />
            } />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <InfoTooltip isOpen={isInfoTooltipOpened} onClose={closeInfoTooltip}>
          {infoMessage}
        </InfoTooltip>
        {
          isLoading && <Preloader />
        }
    </CurrentUserContext.Provider>
  );
}

export default App;
