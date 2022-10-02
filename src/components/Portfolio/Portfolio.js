import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='portfolio__list'>
        <ol className='portfolio__item'>
          <a 
            className='portfolio__item-link'
            href='https://dkay.ru/how-to-learn' 
            target='_blank' 
            rel='noopener noreferrer'>
            <p className='portfolio__item-text'>Статичный сайт</p>
            <p className='portfolio__item-arrow'>↗</p>
          </a>          
        </ol>
        <ol className='portfolio__item'>
          <a 
            className='portfolio__item-link'
            href='https://dkay.ru/russian-travel' 
            target='_blank' 
            rel='noopener noreferrer'>
            <p className='portfolio__item-text'>Адаптивный сайт</p>
            <p className='portfolio__item-arrow'>↗</p>
          </a>
        </ol>
        <ol className='portfolio__item'>
          <a 
            className='portfolio__item-link'
            href='https://dkay.ru/react-mesto-auth' 
            target='_blank' 
            rel='noopener noreferrer'>
            <p className='portfolio__item-text'>Одностраничное приложение</p>
            <p className='portfolio__item-arrow'>↗</p>
          </a>
        </ol>
      </ul>
    </section>
  );
}

export default Portfolio;