import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const {nameRU, duration, image} = movie;
  const savedMoviesPage = location.pathname === '/saved-movies';
  const moviesPage = location.pathname === '/movies';
  const imageUrl = image.url !== '' ? `https://api.nomoreparties.co${image.url}` : '';
  const movieButtonClassName = 
    `movies__save${
      isSaved && moviesPage ? ' movies__save_active': ''}${
      savedMoviesPage ? ' movies__delete' : ''}`;
 
  function getDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    let result = '';
    if (hours > 0) result += `${hours}ч`;
    if (minutes > 0) result += ` ${minutes}м`;
    return result;
  }

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
          src={imageUrl}
          alt={nameRU} />
      </a>
      <button 
        className={movieButtonClassName} 
        type='button'
        onClick={() => {
          setIsSaved(!isSaved);
        }}>
          {!isSaved && moviesPage && 'Сохранить'}
        </button>
    </li>
  );
}

export default MoviesCard;