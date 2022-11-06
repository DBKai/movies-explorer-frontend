import './Login.css';
import Auth from '../Auth/Auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUserInfo, login } from '../../utils/MainApi';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { EMAIL_OR_PASSWORD_INCORRECTED, SERVER_ERROR } from '../../constants/constants';

function Login({ setCurrentUser, setIsLoading }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const currentUser = useContext(CurrentUserContext);
  
  async function handleLOnLogin({email, password}) {
    try {
      setIsLoading(true);
      const { token } = await login({email, password});
      const jwt = localStorage.getItem('jwt');
      if (jwt !== null) {
        localStorage.clear();
      }
      localStorage.setItem('jwt', token);
      const user = await getUserInfo();
      setCurrentUser({
        isLoggedIn: true,
        name: user.name, 
        email: user.email
      });      
      navigate('/movies');
    } catch (err) {
      if (err.message === '401') {
        setErrorMessage(EMAIL_OR_PASSWORD_INCORRECTED);
        return;
      }
      setErrorMessage(SERVER_ERROR);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    !currentUser.isLoggedIn 
      ? <Auth 
        onLogin={handleLOnLogin}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage} />
      : <Navigate to='/' />
  );
}

export default Login;