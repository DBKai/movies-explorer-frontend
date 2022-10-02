import './Auth.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Auth({ onLogin }) {
  const location = useLocation();
  const signupPage = location.pathname === '/signup';
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className='auth-container'>
      <section className='auth'>
        <Link to='/' className='auth__logo-link'>
          <img className='auth__logo' src={logo} alt='Логотип сайта' />
        </Link>
        <h2 className='auth__form-heading'>
          {signupPage ? 'Добро пожаловать!' : 'Рады видеть!'}
        </h2>
        <form className='auth__form' onSubmit={handleSubmit}>
          <fieldset className='auth__form-container'>
            {
              signupPage &&
              <label className='auth__form-label'>
                Имя
                <input 
                  className='auth__form-input'
                  name='name'
                  type='text'
                  minLength='2'
                  maxLength='30'
                  value='Василий'
                  required />
                <span className='auth__form-error'></span>
              </label>
            }
            <label className='auth__form-label'>
              E-mail
              <input 
                className='auth__form-input auth__form-input-valid'
                name='email'
                type='email'
                value='pochta@yandex.ru'
                required />
              <span className='auth__form-error'></span>
            </label>
            <label className='auth__form-label'>
              Пароль
              <input 
                className='auth__form-input auth__form-input-invalid'
                name='password'
                type='password'
                value='123456789'
                required />
              <span className='auth__form-error'>Что-то пошло не так...</span>
            </label>
          </fieldset>
          <div className='auth__form-buttons'>
            <button 
              className='auth__form-button'
              type='submit'
              onClick={onLogin}>
                {signupPage ? 'Зарегистрироваться' : 'Войти'}
            </button>
            <p className='auth__form-signin'>
              {
                signupPage ?
                <>
                  Уже зарегистрированы?
                  <Link to='/signin' className='auth__form-link'>
                    Войти
                  </Link>
                </> :
                <>
                  Ещё не зарегистрированы?
                  <Link to='/signup' className='auth__form-link'>
                    Регистрация
                  </Link>
                </>
              }
            </p>
          </div>          
        </form>
      </section>
    </div>    
  );
}

export default Auth;