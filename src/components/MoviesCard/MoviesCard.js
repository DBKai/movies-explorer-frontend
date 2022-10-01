import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const {nameRU, duration, image} = movie;
  const savedMoviesPage = location.pathname === '/saved-movies';
  const moviesPage = location.pathname === '/movies';
  const movieButtonClassName = 
    `movies__save${
      isSaved && moviesPage ? ' movies__save_active': ''}${
      savedMoviesPage ? ' movies__delete' : ''}`;
  return (
    <li className='movies__card'>
      <div className='movies__heading'>
        <h2 className='movies__name'>{nameRU}</h2>
        <p className='movies__duration'>{`${duration} минут`}</p>      
      </div>
      <img 
        className='movies__preview'
        src={image}
        alt={nameRU} />
      <button className={movieButtonClassName} onClick={() => {
        setIsSaved(!isSaved);
      }}>{!isSaved && moviesPage && 'Сохранить'}</button>
    </li>
  );
}

export default MoviesCard;