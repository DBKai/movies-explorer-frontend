import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import { useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { getAllMovies } from '../../utils/MoviesApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); //текст запроса
  const [filteredMovies, setFilteredMovies] = useState([]); // найденные фильмы
  const [isShortMovies, setIsShortMovies] = useState(false); // переключатель короткометражек

  const navigate = useNavigate();
  
  function onLogout() {
    setIsLoggedIn(false);
    navigate('/');
  }

  function onLogin() {
    setIsLoggedIn(true);
    navigate('/movies');
  }

  function filterMovies() {
    const newArray = movies.filter(v => v.nameRU === '');
    setFilteredMovies(newArray);
  }

  // Нажатие кнопки "Найти"
  function handleSearchMoviesSubmit(searchString) {
    setSearchQuery(searchString);
    // filterMovies(searchString);
    localStorage.setItem('searchQuery', searchString);
    // фильтр по nameRU nameEN
  }

  useEffect(() => {
    getAllMovies()
      .then((items) => {
        setMovies(items);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
    });
  }, []);

  useEffect(() => {
    // Проверяем грузили ли уже фильмы, если нет, то надо загрузить.
    const storageMovies = localStorage.getItem('movies');
    const strorageIsShortMovies = localStorage.getItem('isShortMovies');
    const storageSearchQuery = localStorage.getItem('searchQuery');
    
    if (storageMovies !== null && storageMovies !== 'undefined') {      
      console.log('Фильмы загружены');
    }

    if (strorageIsShortMovies !== null && strorageIsShortMovies !== 'undefined') {      
      console.log('Короткометражки: ' + strorageIsShortMovies);
    }

    if (storageSearchQuery !== null && storageSearchQuery !== 'undefined') {
      
      console.log(`Последний поисковый запрос: ${storageSearchQuery}`);
    }
  }, []);

  function handleShortMoviesCheckbox() {
    setIsShortMovies(!isShortMovies);
  }

  useEffect(() => {
    localStorage.setItem('isShortMovies', isShortMovies);
  }, [isShortMovies]);

  return (
    <CurrentUserContext.Provider value={isLoggedIn}>      
      <Routes>
        <Route path='/' 
          element={ 
            <Main /> 
          } />
        <Route path='/movies' 
          element={ 
            <Movies 
              movies={movies} 
              onSearchMovies={handleSearchMoviesSubmit}
              isShortMovies={isShortMovies} 
              handleShortMoviesCheckbox={handleShortMoviesCheckbox}/> 
          } />
        <Route path='/saved-movies' 
          element={ 
            <SavedMovies /> 
          } />
        <Route path='/profile' 
          element={ 
            <Profile onLogout={onLogout} /> 
          } />        
        <Route path='/signup' 
          element={ 
            <Register /> 
          } />
        <Route path='/signin' 
          element={ 
            <Login onLogin={onLogin}/> 
          } />
        <Route path='*' 
          element={ 
            <NotFound /> 
          } />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
