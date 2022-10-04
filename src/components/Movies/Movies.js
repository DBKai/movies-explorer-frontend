import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({movies, onSearchMovies, isShortMovies, handleShortMoviesCheckbox}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <SearchForm 
        onSearchMovies={onSearchMovies} 
        isShortMovies={isShortMovies} 
        handleShortMoviesCheckbox={handleShortMoviesCheckbox} />
      { isLoading && <Preloader /> }
      { !isLoading && <MoviesCardList movies={movies} /> }
      <Footer />
    </>
  );
}

export default Movies;