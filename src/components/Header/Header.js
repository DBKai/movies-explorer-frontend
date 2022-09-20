import './Header.css';

import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const landingPage = location.pathname === '/';
  const headerClassName = `header ${ landingPage && "header_dark" }`

  return (
    <div className={ headerClassName }>      
      <img src={logo} alt='Логотип movies explorer' className='header__logo' />
      <Navigation />
    </div>
  );
}

export default App;
