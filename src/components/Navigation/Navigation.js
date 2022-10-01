import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation({isOpen, onClose, mainPage}) {
    const activeNavLinkClassName = ({isActive}) => {
      return `navigation__item${mainPage ? ' navigation__item-white' : ''}${isActive ? ' navigation__item_active' : ''}`;
    };
    return (
    <>
      <div className={`navigation header__navigation${isOpen ? ' navigation_opened' : ''}`}>
        <div className='navigation__container'>
          <div className='navigation__link-container'>
            <button className='navigation__menu-close' onClick={onClose}/>
            <nav className='navigation__links'>
              <NavLink 
                to='/' 
                className='navigation__item navigation__mobile-item'>Главная</NavLink>
              <NavLink 
                to='/movies'
                className={activeNavLinkClassName}>Фильмы</NavLink>
              <NavLink 
                to='/saved-movies' 
                className={activeNavLinkClassName}>Сохранённые фильмы</NavLink>      
            </nav>
          </div>
          <Link 
            to='/profile' 
            className={`navigation__account${mainPage ? ' navigation__account-white' : ''}`}>Аккаунт</Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;