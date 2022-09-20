import './FilterCheckbox.css';
import { useState } from 'react';

function FilterCheckbox() {
  const [checked, setChecked] = useState(false);

  function checkedChanged() {
    setChecked(!checked);    
  }

  return (
    <div className={`filtercheckbox ${checked && 'filtercheckbox__disable'}`} onClick={checkedChanged}>
      <div className={`tumbler ${checked && 'tumbler__disable'}`}  />
    </div>
  );
}

export default FilterCheckbox;