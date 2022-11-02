import { useState, useCallback } from 'react';
import { EMAIL_INCORRECTED, USERNAME_INCORRECTED } from '../constants/constants';

function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const {name, value, validationMessage, validity} = event.target;
    let errorMessage = validationMessage;
    if (!event.target.validity.valid) {
      if (validity.patternMismatch) {
        if (name === 'name') {
          errorMessage = USERNAME_INCORRECTED;
        }
        if (name === 'email') {
          errorMessage = EMAIL_INCORRECTED;
        }
      }
    }
    setValues({...values, [name]: value });    
    setErrors({...errors, [name]: errorMessage});
    setIsValid(event.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}

export default useFormAndValidation;