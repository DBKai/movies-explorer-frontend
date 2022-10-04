import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';

function MoviesCardList({movies}) {
  const location = useLocation();
  const savedMoviesPath = location.pathname === '/saved-movies';
  const moviesPath = location.pathname === '/movies';

  function getMovieCards() {
    return movies.map((item) => (
      <MoviesCard key={item.id} movie={item} />
    ));
  }
  
  return (
    <section className={`movies${savedMoviesPath ? ' saved-movies' : ''}`}>
      <ul className='movies__card-list'>
        {
          !savedMoviesPath && getMovieCards()
        }
      </ul>
      { 
        moviesPath &&
        <div className='movies__more'>
          <button 
            className='movies__more-button'
            type='button'>Ещё</button>
        </div>
      }      
    </section>
  );
}

export default MoviesCardList;