import './Auth.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Auth({ onRegister, onLogin, errorMessage, setErrorMessage }) {
  const location = useLocation();
  const signupPage = location.pathname === '/signup';
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  function handleSubmit(event) {
    event.preventDefault();
    
    signupPage ? 
      onRegister({
        name: values.name, 
        email: values.email, 
        password: values.password
      }) :
      onLogin({
        email: values.email, 
        password: values.password
      });
  }

  function handleChangeInput(event) {
    handleChange(event);
    setErrorMessage('');
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
        <form className='form auth__form' onSubmit={handleSubmit}>
          <fieldset className='auth__form-container'>
            {
              signupPage &&
              <label className='auth__form-label'>
                Имя
                <input 
                  className={`auth__form-input ${ errors?.name ? 'auth__form-input-invalid' : ''}`}
                  name='name'
                  type='text'
                  minLength='2'
                  maxLength='30'
                  onChange={handleChangeInput}
                  value={values?.name || ''}
                  pattern='^[a-zA-Zа-яА-ЯёЁ]+[\s-]?[a-zA-Zа-яА-ЯёЁ]+$'
                  required />
                <span className='auth__form-error'>{errors?.name || ''}</span>
              </label>
            }
            <label className='auth__form-label'>
              E-mail
              <input 
                className={`auth__form-input ${ errors?.email ? 'auth__form-input-invalid' : ''}`}
                name='email'
                type='email'
                onChange={handleChangeInput}
                value={values?.email || ''}
                pattern='^[a-z0-9._%+-]+@[a-z0-9.-]{2,}\.[a-z]{2,4}$'
                required />
              <span className='auth__form-error'>{errors?.email || ''}</span>
            </label>
            <label className='auth__form-label'>
              Пароль
              <input 
                className={`auth__form-input ${ errors?.password ? 'auth__form-input-invalid' : ''}`}
                name='password'
                type='password'
                onChange={handleChangeInput}
                value={values?.password || ''}
                required />
              <span className='auth__form-error'>{errors?.password || ''}</span>
            </label>
          </fieldset>
          <div className='auth__form-buttons'>
            { <p className='auth__error-message'>{errorMessage}</p>}
            <button 
              className={`auth__form-button ${!isValid ? 'auth__form-button_inactive' : ''}`}
              type='submit'
              disabled={!isValid}>
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