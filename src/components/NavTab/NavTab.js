import './NavTab.css';
import { Link } from 'react-scroll';

function NavTab() {

  return (    
    <ul className='navtab'>
      <li><Link to='aboutproject' className='navtab__link' spy={true} smooth={true} duration={500}>О проекте</Link></li>
      <li><Link to='techs' className='navtab__link' spy={true} smooth={true} duration={500}>Технологии</Link></li>
      <li><Link to='aboutme' className='navtab__link' spy={true} smooth={true} duration={500}>Студент</Link></li>
    </ul>    
  );
}

export default NavTab;