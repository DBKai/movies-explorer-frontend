import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSearchMovies, isShortMovies, handleShortMoviesCheckbox }) {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    onSearchMovies(value);
  }

  function handleChange(event) {
    const input = event.target;

    setValue(input.value);
  }

  return (
    <section className='search'>
      <form className='searchform' onSubmit={handleSubmit} noValidate>
        <div className='searchform__container'>
          <input
            type='text'
            id='input-search'
            name='search-field'
            className='searchform__item'
            placeholder='Фильм'
            onChange={handleChange} 
            value={value}/>
          <button className='searchform__submit' type='submit'>Найти</button>
        </div>
        <FilterCheckbox 
          isShortMovies={isShortMovies} 
          handleShortMoviesCheckbox={handleShortMoviesCheckbox} />
      </form>
    </section>    
  );
}

export default SearchForm;