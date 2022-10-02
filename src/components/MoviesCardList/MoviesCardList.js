import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { initialMovies } from '../../constants/initialMovies';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const location = useLocation();
  const savedMovies = location.pathname === '/saved-movies';
  const movies = location.pathname === '/movies';
  function getMovieCards(movieCards) {
    return movieCards.map((item, index) => (
      <MoviesCard key={index} movie={item} />
    ));
  }
  return (
    <section className={`movies${savedMovies ? ' saved-movies' : ''}`}>
      <ul className='movies__card-list'>
        {
          savedMovies ?
          getMovieCards(initialMovies.slice(0, 3)) :
          getMovieCards(initialMovies)
        }
      </ul>
      { 
        movies &&
        <div className='movies__more'>
          <button className='movies__more-button'>Ещё</button>
        </div>
      }      
    </section>
  );
}

export default MoviesCardList;