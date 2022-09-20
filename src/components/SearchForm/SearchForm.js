import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className='searchform' onSubmit={handleSubmit}>
      <div className='searchform__item-container'>
        <input 
          id='search'
          name='search-field'
          className='searchform__item'
          placeholder='Фильм'/>
        <button className='searchform__submit'>Найти</button>
      </div>
      <div className='shortmovies'>
        <label>Короткометражки</label>
        <FilterCheckbox />
      </div>      
    </form>
  );
}

export default SearchForm;