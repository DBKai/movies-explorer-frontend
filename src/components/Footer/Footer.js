import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <p className='footer__project'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
      <p className='footer__copyright'>© 2022</p>
        <div className='footer__links'>
          <a 
            className='footer__link' 
            href='https://practicum.yandex.ru'
            target='_blank' 
            rel='noopener noreferrer'>
            Яндекс.Практикум
          </a>
          <a 
            className='footer__link' 
            href='https://github.com/dbkai'
            target='_blank' 
            rel='noopener noreferrer'>
            Github
          </a>
        </div>
      </div>      
    </section>
  );
}

export default Footer;