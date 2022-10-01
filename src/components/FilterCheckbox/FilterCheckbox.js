import './FilterCheckbox.css';
import { useState } from 'react';

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="filtercheckbox">
      <input
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        type="checkbox"
        className="invisible-filtercheckbox"
      />
      Короткометражки
      <span className="visible-filtercheckbox" />    
    </label>
  );
}

export default FilterCheckbox;