import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { getSavedMovies } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import {
  REQUEST_DURING_ERROR, 
  EMPTY_SEARCH_TEXT_ERROR,
  NOTHING_FOUND
} from '../../constants/constants';

function SavedMovies({ 
  setInfoMessage, 
  setIsInfoTooltipOpened }) {
  const [savedMovies, setSavedMovies] = useState(null);
  const [receivedMovies, setReceivedMovies] = useState(null);
  const [formMessage, setFormMessage] = useState('');
  const [moviesMessage, setMoviesMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setMoviesMessage('');
    if (savedMovies !== null) {
      setFormMessage('');
      const filteredMovies = filterMovies(savedMovies);
      if (filteredMovies.length === 0) {
        setMoviesMessage(NOTHING_FOUND);
      }
      setReceivedMovies(filteredMovies);
    }
  }

  function filterMovies(movies) {
    let filteredMoviesArray = [];
    if (movies !== null && movies.length > 0) {
      filteredMoviesArray = movies.filter((movie) => {
        const nameRU = movie.nameRU.toLowerCase().includes(searchText.toLowerCase());
        const nameEN = movie.nameEN.toLowerCase().includes(searchText.toLowerCase());
        return nameRU || nameEN;
      });
    }
    if (isShortMovies) {
      filteredMoviesArray = filteredMoviesArray.filter(movie => movie.duration <= 40);
    }
    return filteredMoviesArray;
  }

  async function getSavedMoviesFromMongo() {
    try {
      setIsLoading(true);
      const movies = await getSavedMovies();
      setReceivedMovies(movies);
      setSavedMovies(movies);
    } catch {
      setInfoMessage(REQUEST_DURING_ERROR);
      setIsInfoTooltipOpened(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getSavedMoviesFromMongo();
  }, []);

  useEffect(() => {
    search();
  }, [isShortMovies]);

  useEffect(() => {
    search();
  }, [savedMovies]);

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
            movies={receivedMovies}
            setMovies={setSavedMovies}
            savedMovies={savedMovies} 
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

export default SavedMovies;