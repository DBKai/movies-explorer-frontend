import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ 
  searchText, 
  isShortMovies, 
  formMessage,
  handleSubmit, 
  handleChangeShorts, 
  handleChangeSearchText }) {
  return (
    <section className='search'>
      <form className='form searchform' onSubmit={handleSubmit}>
        <div className='searchform__container'>
          <div className='searchform__input'>
            <input
              className='searchform__item'
              name='searchInput'
              type='text'
              placeholder='Фильм'
              onChange={handleChangeSearchText}
              value={searchText} />
            <button className='searchform__submit' type='submit'>Найти</button>
          </div>
          <p className='searchform__message'>{formMessage}</p>
        </div>
        <FilterCheckbox 
          isShortMovies={isShortMovies || false} 
          handleChangeShorts={handleChangeShorts} />
      </form>
    </section>
  );
}

export default SearchForm;