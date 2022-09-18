import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (    
    <ul className='navtab'>
      <li><Link to="#" className='navtab__link' href='#'>О проекте</Link></li>
      <li><Link to="#" className='navtab__link' href='#'>Технологии</Link></li>
      <li><Link to="#" className='navtab__link' href='#'>Студент</Link></li>
    </ul>    
  );
}

export default NavTab;