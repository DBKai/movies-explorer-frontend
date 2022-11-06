import './Register.css';
import Auth from '../Auth/Auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { login, register } from '../../utils/MainApi';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { REGISTER_USER_ERROR, SERVER_ERROR, USER_EMAIL_EXISTS } from '../../constants/constants';

function Register({ setCurrentUser, setIsLoading }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const currentUser = useContext(CurrentUserContext);
  
  async function handleOnRegister({ name, email, password }) {
    try {
      setIsLoading(true);
      const user = await register({name, email, password});
      if (user.email) {
        const { token } = await login({email, password});
        if (token) {
          localStorage.clear();
          localStorage.setItem('jwt', token);
          setCurrentUser({
            isLoggedIn: true,
            name: name,
            email: email
          });
          navigate('/movies');
        }
      }
    } catch (err) {
      if (err.message === '409') {
        setErrorMessage(USER_EMAIL_EXISTS);
        return;
      }
      if (err.message === '400') {
        setErrorMessage(REGISTER_USER_ERROR);
        return;
      }
      setErrorMessage(SERVER_ERROR);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      { 
        !currentUser.isLoggedIn
          ? <Auth 
              onRegister={handleOnRegister} 
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage} />
          : <Navigate to='/' />
      }
    </>
  );
}

export default Register;