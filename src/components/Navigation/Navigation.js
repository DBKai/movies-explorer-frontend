import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const isActive = ({ isActive }) => isActive && 'header__navigation-item_active';

  return (
    <div className='header__navigation-container'>
        <nav className='header__navigation'>
          <NavLink 
            to='movies' 
            className={`header__navigation-item ${isActive}`}>Фильмы</NavLink>
          <NavLink 
            to='saved-movies' 
            className={`header__navigation-item ${isActive}`}>Сохранённые фильмы</NavLink>      
        </nav>
        {/* {          
          <div className='header__login'>
            <button className='header__link signup'>Регистрация</button>
            <button to='/signin' className='header__link signin'>Войти</button>
          </div>             
        } */}
        <button className='header__account'>Аккаунт</button>
      </div>
  );
}

export default Navigation;