import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
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
      <SearchForm />
      { isLoading && <Preloader /> }
      { !isLoading && <MoviesCardList /> }
      <Footer />
    </>    
  );
}

export default Movies;