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
          </a>
          <p className='portfolio__item-arrow'>↗</p>
        </ol>
        <ol className='portfolio__item'>
          <a 
            className='portfolio__item-link'
            href='https://dkay.ru/russian-travel' 
            target='_blank' 
            rel='noopener noreferrer'>
            <p className='portfolio__item-text'>Адаптивный сайт</p>
          </a>
          <p className='portfolio__item-arrow'>↗</p>  
        </ol>
        <ol className='portfolio__item'>
          <a 
            className='portfolio__item-link'
            href='https://dkay.ru/react-mesto-auth' 
            target='_blank' 
            rel='noopener noreferrer'>
            <p className='portfolio__item-text'>Одностраничное приложение</p>
          </a>
          <p className='portfolio__item-arrow'>↗</p>  
        </ol>
      </ul>
    </section>
  );
}

export default Portfolio;