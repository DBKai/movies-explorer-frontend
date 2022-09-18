import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='portfolio__list'>
        <ol className='portfolio__item'>
          <p className='portfolio__item-text'>Статичный сайт</p>
          <p className='portfolio__item-arrow'>↗</p>  
        </ol>
        <ol className='portfolio__item'>
          <p className='portfolio__item-text'>Адаптивный сайт</p>
          <p className='portfolio__item-arrow'>↗</p>  
        </ol>
        <ol className='portfolio__item'>
          <p className='portfolio__item-text'>Одностраничное приложение</p>
          <p className='portfolio__item-arrow'>↗</p>  
        </ol>
      </ul>
    </div>
  );
}

export default Portfolio;