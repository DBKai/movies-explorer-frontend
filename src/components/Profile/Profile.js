import './Profile.css';
import Header from '../Header/Header';
import { useContext, useEffect, useState } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { setUserInfo } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { 
  SERVER_ERROR, 
  SUCCESS_SAVE_DATA, 
  UPDATE_PROFILE_ERROR, 
  USER_EMAIL_EXISTS 
} from '../../constants/constants';

function Profile({ 
  setCurrentUser, 
  setIsLoading, 
  setInfoMessage, 
  setIsInfoTooltipOpened }) {
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { values, handleChange, setValues } = useFormAndValidation();
  const currentUser = useContext(CurrentUserContext);
  const [isDisabledButtonSave, setIsDisabledButtonSave] = useState(false);

  const navigate = useNavigate();
  
  function handleEditingClick() {
    setIsEditing(true);
    setIsDisabledButtonSave(false);
  }

  function handleOnSignOut() {
    setCurrentUser({
      isLoggedIn: false,
      name: '',
      email: ''
    });
    localStorage.clear();
    navigate('/');
  }

  async function handleUpdateUser(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const user = await setUserInfo({
        name: values.name, 
        email: values.email
      });
      setCurrentUser({
        isLoggedIn: true,
        name: user.name, 
        email: user.email
      });
      setIsEditing(false);
      if (user.email) {
        setInfoMessage(SUCCESS_SAVE_DATA);
        setIsInfoTooltipOpened(true);
      }
    } catch (err) {
      if (err.message === 400) {
        setErrorMessage(UPDATE_PROFILE_ERROR);
        return;
      }
      if (err.message === 409) {
        setErrorMessage(USER_EMAIL_EXISTS);
        return;
      }
      setErrorMessage(SERVER_ERROR);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setValues({...values,
      'name': currentUser.name,
      'email': currentUser.email
    });
  }, []);

  useEffect(() => {
    if (values.name !== undefined && values.email !== undefined) {
      const inputValuesEquals = Object.entries(values)
        .every(item => currentUser[item[0]] === item[1]);
      setIsDisabledButtonSave(!inputValuesEquals);
    }
  }, [values]);

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className='profile__heading'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleUpdateUser}>
          <div className='profile__form-container'>
            <fieldset className='profile__form-fields'>
              <label className='profile__form-label'>Имя
                <input 
                  className='profile__form-input'
                  name='name'
                  type='text'                
                  minLength='2'
                  maxLength='30'
                  onChange={handleChange}
                  value={values?.name || ''}
                  pattern='^[a-zA-Zа-яА-ЯёЁ\s_-]+$'
                  required
                  disabled={!isEditing}
                />
              </label>
              <label className='profile__form-label'>E-mail
                <input                 
                  className='profile__form-input'
                  name='email'
                  type='text'
                  onChange={handleChange}
                  value={values?.email || ''}
                  pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                  required
                  disabled={!isEditing}
                />
              </label>
            </fieldset>
          </div>
          <div className='profile__form-buttons'>
            <span className='profile__form-input-error'>{errorMessage || ''}</span>
          {
            isEditing 
            ? <button
                className={`profile__form-save-button 
                ${(isDisabledButtonSave === false || errorMessage !== '') 
                  && 'profile__form-save-button_disabled'}`}
                type='submit' 
                disabled={(isDisabledButtonSave === false || errorMessage !== '')}>Сохранить</button>
            : <>
                <button 
                  className='profile__form-button profile__account-edit'
                  type='button'
                  onClick={handleEditingClick}>Редактировать</button>
                <button 
                  className='profile__form-button profile__account-exit'
                  type='button'
                  onClick={handleOnSignOut}>Выйти из аккаунта</button>
              </>
          }
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;