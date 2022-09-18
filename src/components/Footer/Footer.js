import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <p className='footer__project'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
      <p className='footer__copyright'>© 2022</p>
        <div className='footer__links'>
          <p className='footer__orgname'>Яндекс.Практикум</p>
          <p className='footer__github'>Github</p>
        </div>
      </div>      
    </div>
  );
}

export default Footer;