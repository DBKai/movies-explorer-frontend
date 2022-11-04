import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../../utils/MoviesApi';
import { getSavedMovies } from '../../utils/MainApi';
import validator from 'validator';
import Preloader from '../Preloader/Preloader';
import {
  REQUEST_DURING_ERROR, 
  EMPTY_SEARCH_TEXT_ERROR, 
  NOTHING_FOUND
} from '../../constants/constants';

function Movies({ 
  setInfoMessage, 
  setIsInfoTooltipOpened }) {  
  const [movies, setMovies] = useState(null);
  const [savedMovies, setSavedMovies] = useState(null);
  const [formMessage, setFormMessage] = useState('');
  const [moviesMessage, setMoviesMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isShortMovies, setIsShortMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const storageMovies = localStorage.getItem('movies');
  const storageSearch = localStorage.getItem('search');

  function handleChangeShorts(event) {
    setIsShortMovies(event.target.checked);
  }

  function handleChangeSearchText(event) {
    setSearchText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (searchText.trim() === '') {
      setFormMessage(EMPTY_SEARCH_TEXT_ERROR);
      return;
    }
    search();
  }

  function search() {
    setFormMessage('');
    setMoviesMessage('');
    const filteredMovies = filterMovies(storageMovies);
    setMovies(filteredMovies);
    if (filteredMovies.length === 0) {
      setMoviesMessage(NOTHING_FOUND);
    }
    localStorage.setItem('search', JSON.stringify({
      isShorts: isShortMovies,
      searchText,
      filteredMovies
    }));
  }

  function filterMovies(movies) {
    let filteredMoviesArray = [];
    if (movies !== null && movies.length > 0) {
      const films = JSON.parse(movies);      
      filteredMoviesArray = films.filter((item) => {
        const nameRU = item.nameRU.toLowerCase().includes(searchText.toLowerCase());
        const nameEN = item.nameEN.toLowerCase().includes(searchText.toLowerCase());
        return nameRU || nameEN;
      });
    }
    if (isShortMovies) {
      filteredMoviesArray = filteredMoviesArray.filter(movie => movie.duration <= 40);
    }
    return filteredMoviesArray;
  }

  async function getMoviesFromApi() {
    try {
      setIsLoading(true);
      const allMovies = await getAllMovies();
      const newMovies = allMovies.map((movie) => {
        return {
          ...movie,
          movieId: movie.id,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailerLink: validator.isURL(movie.trailerLink) ? movie.trailerLink : `https://api.nomoreparties.co${movie.image.url}`
        }
      });
      localStorage.setItem('movies', JSON.stringify(newMovies));
    } catch {
      setInfoMessage(REQUEST_DURING_ERROR);
      setIsInfoTooltipOpened(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function getSavedMoviesFromMongo() {
    try {
      setIsLoading(true);
      setSavedMovies(await getSavedMovies());
    } catch {
      setInfoMessage(REQUEST_DURING_ERROR);
      setIsInfoTooltipOpened(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSavedMoviesFromMongo();
    if (storageMovies === null) {
      getMoviesFromApi();
    }
    if (storageSearch !== null) {
      const { searchText, isShorts, filteredMovies } = JSON.parse(storageSearch);
      setMovies(filteredMovies || []);
      setSearchText(searchText || '');
      setIsShortMovies(isShorts || false);
    }
  }, []);

  useEffect(() => {
    if (movies !== null) {
      search();
    }
  }, [isShortMovies]);

  return (
    <>
      <Header />
      <main>
        <SearchForm
          searchText={searchText}
          isShortMovies={isShortMovies}
          formMessage={formMessage} 
          handleSubmit={handleSubmit}
          handleChangeShorts={handleChangeShorts}
          handleChangeSearchText={handleChangeSearchText} />
        { 
          !isLoading &&
          <MoviesCardList 
            movies={movies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            moviesMessage={moviesMessage}
            setInfoMessage={setInfoMessage} 
            setIsInfoTooltipOpened={setIsInfoTooltipOpened} /> 
        }
      </main>
      <Footer />
      {
        isLoading && <Preloader />
      }
    </>
  );
}

export default Movies;