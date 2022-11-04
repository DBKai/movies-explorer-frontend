import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MoviesCardList({ 
  movies, 
  savedMovies, 
  setSavedMovies,
  moviesMessage,
  setInfoMessage,
  setIsInfoTooltipOpened }) {
  const location = useLocation();
  const savedMoviesPath = location.pathname === '/saved-movies';
  const moviesPath = location.pathname === '/movies';
  const [renderedMovies, setRenderedMovies] = useState([]); // Фильмы для рендера
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function getNextRowMoviesForRender() {
    const moviesInRow = screenWidth >= 1280 ? 3 : 2;
    return movies.slice(renderedMovies.length, renderedMovies.length + moviesInRow);
  }

  function getRenderedMovies() {
    let displayedMovies = 12;
    if (screenWidth <= 480 ) displayedMovies = 5;
    if (screenWidth < 1280 && screenWidth >= 768 ) displayedMovies = 8;
    return movies.slice(0, displayedMovies);
  }

  function handleButtonMore() {
    const slicedMovies = getNextRowMoviesForRender();
    setRenderedMovies((prevMovies) => { 
      return [...prevMovies,  ...slicedMovies];
    });
  }

  const movieCards = renderedMovies.map((movie) => {
    return <MoviesCard 
      key={movie.movieId} 
      movie={movie}
      savedMovies={savedMovies}
      setSavedMovies={setSavedMovies}
      setInfoMessage={setInfoMessage} 
      setIsInfoTooltipOpened={setIsInfoTooltipOpened} />
  });

  useEffect(() => {
    if (movies !== null) {
      const slicedMovies = getRenderedMovies();
      setRenderedMovies(slicedMovies);
    }
  }, [movies, screenWidth]);

  useEffect(() => {
    function resize(event) {
      let resizeTimeout;
      if (resizeTimeout !== null) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          setScreenWidth(event.target.innerWidth);
        }, 100);
      }
    }

    window.addEventListener('resize', resize, false);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className={`movies${savedMoviesPath ? ' saved-movies' : ''}`}>
      { 
        movieCards?.length > 0 ?
        <ul className='movies__card-list'>
          { movieCards }
        </ul> : moviesMessage.length > 0 && <p className='movies__error-message'>{moviesMessage}</p>
      }
      { 
        moviesPath && renderedMovies?.length < movies?.length &&
        <div className='movies__more'>
          <button 
            className='movies__more-button'
            type='button'
            onClick={handleButtonMore}>Ещё</button>
        </div>
      }
    </section>
  );
}

export default MoviesCardList;