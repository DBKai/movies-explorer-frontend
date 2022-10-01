import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
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
            placeholder='Фильм'/>
          <button className='searchform__submit' type='submit'>Найти</button>
        </div>
        <FilterCheckbox />
      </form>
    </section>    
  );
}

export default SearchForm;