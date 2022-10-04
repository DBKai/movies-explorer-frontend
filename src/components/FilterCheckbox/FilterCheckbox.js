import './FilterCheckbox.css';

function FilterCheckbox({ isShortMovies, handleShortMoviesCheckbox }) {

  return (
    <label className="filtercheckbox">
      <input
        onChange={() => handleShortMoviesCheckbox()}
        checked={isShortMovies}
        type="checkbox"
        className="invisible-filtercheckbox"
      />
      Короткометражки
      <span className="visible-filtercheckbox" />    
    </label>
  );
}

export default FilterCheckbox;