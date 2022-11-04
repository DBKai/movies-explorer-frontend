import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Header() {
  const location = useLocation();
  const mainPage = location.pathname === '/';
  const headerClassName = `header${ mainPage ? ' header_dark' : '' }`
  const burgerMenuClassName = `header__burger-menu${ mainPage ? ' header__burger-menu-white' : '' }`;
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  function handlerBurgerMenu() {
    if (isMenuOpened) {
      setIsMenuOpened(false);
    } else {
      setIsMenuOpened(true)
    }    
  }

  return (
    <section className={headerClassName}>
      <Link to='/' className='header__link-logo'>
        <img src={logo} alt='Логотип movies explorer' className='header__logo' />
      </Link>
      {
        !currentUser.isLoggedIn ? 
          <div className='header__login'>
            <Link to='/signup' className='header__link header__link-signup'>Регистрация</Link>
            <Link to='/signin' className='header__link header__link-signin'>Войти</Link>
          </div> :
          <>
            <div 
              className={burgerMenuClassName}
              onClick={handlerBurgerMenu}></div>
            <Navigation 
              isOpen={isMenuOpened} 
              onClose={handlerBurgerMenu} 
              mainPage={mainPage} />
          </>          
      }
    </section>
  );
}

export default Header;
