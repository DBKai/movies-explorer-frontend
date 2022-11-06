import './FilterCheckbox.css';

function FilterCheckbox({ isShortMovies, handleChangeShorts }) {
  return (
    <label className="filtercheckbox">
      <input
        className="invisible-filtercheckbox"
        type="checkbox"
        name="isShortMovies"
        onChange={handleChangeShorts}
        checked={isShortMovies}
      />
      Короткометражки
      <span className="visible-filtercheckbox" />    
    </label>
  );
}

export default FilterCheckbox;