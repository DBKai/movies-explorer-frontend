import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addToSavedMovies, deleteFromSavedMovies } from '../../utils/MainApi';
import { SAVED_MOVIE_ADDING_ERROR, SAVED_MOVIE_DELETING_ERROR } from '../../constants/constants';

function MoviesCard({ 
  movie,
  savedMovies,
  setSavedMovies,
  setInfoMessage,
  setIsInfoTooltipOpened,
  fullLogout }) {
  const location = useLocation();
  const {nameRU, duration, image} = movie;
  const savedMoviesPage = location.pathname === '/saved-movies';
  const moviesPage = location.pathname === '/movies';
  const [isSaved, setIsSaved] = useState(false);

  const movieButtonClassName = 
    `movies__save${
      isSaved && moviesPage ? ' movies__save_active': ''}${
      savedMoviesPage ? ' movies__delete' : ''}`;
 
  function getDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`
  }
  
  const checkIsSaved = savedMovies.some(item => item.movieId === movie.movieId);

  async function handleAddToSavedMovie() {
    try {
      if (movie.movieId) {
        const addedMovie = await addToSavedMovies(movie);
        setSavedMovies([...savedMovies, addedMovie]);
        setIsSaved(true);
      }
    } catch (err) {
      if (err.message === '401') {
        fullLogout();
        return;
      }
      setInfoMessage(SAVED_MOVIE_ADDING_ERROR);
      setIsInfoTooltipOpened(true);
    }
  }

  async function handleDeleteFromSavedMovie(mongoId) {
    try {
      if (mongoId) {
        const deletedMovie = await deleteFromSavedMovies(mongoId);
        if (deletedMovie._id) {
          const newSavedMovies = savedMovies.filter(c => c._id !== deletedMovie._id);
          setSavedMovies(newSavedMovies);
          setIsSaved(false);
        }
      }
    } catch (err) {
      if (err.message === '401') {
        fullLogout();
        return;
      }
      setInfoMessage(SAVED_MOVIE_DELETING_ERROR);
      setIsInfoTooltipOpened(true);
    }
  }

  function handleMovieClick() {
    if (savedMoviesPage) {
      handleDeleteFromSavedMovie(movie._id);
    } else {
      if (isSaved) {
        const mongoId = savedMovies.find(item => item.movieId === movie.movieId);
        handleDeleteFromSavedMovie(mongoId?._id);
      } else {
        handleAddToSavedMovie();
      }
    }
  }

  useEffect(() => {
    if (moviesPage) {
      setIsSaved(checkIsSaved);
    }
  }, []);

  return (
    <li className='movies__card'>
      <div className='movies__heading'>
        <h2 className='movies__name'>{nameRU}</h2>
        <p className='movies__duration'>{getDuration(duration)}</p>
      </div>
      <a
        className='movies__link'
        href={movie.trailerLink}
        target='_blank' 
        rel='noopener noreferrer'>
        <img 
          className='movies__preview'
          src={image}
          alt={nameRU} />
      </a>
      <button 
        className={movieButtonClassName} 
        type='button'
        onClick={handleMovieClick}>
          {!isSaved && moviesPage && 'Сохранить'}
        </button>
    </li>
  );
}

export default MoviesCard;