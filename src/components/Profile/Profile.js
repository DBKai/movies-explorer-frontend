import './Profile.css';
import Header from '../Header/Header';
import { useState } from 'react';

function Profile({ onLogout }) {
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMEssage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMEssage('При обновлении профиля произошла ошибка.');
  }

  return (
    <>
    <Header />
    <section className="profile">
      <h2 className='profile__heading'>Привет, Виталий!</h2>
      <form className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__form-container'>
          <fieldset className='profile__form-fields'>
            <label className='profile__form-label'>Имя
              <input 
                id='name'
                name='name'
                type='text'
                className='profile__form-input'
                minLength='2'
                maxLength='30'
                autoComplete='on'
                required
                disabled={!isEditing}
              />
            </label>
            <label className='profile__form-label'>E-mail
              <input 
                id='email'
                name='email'
                type='text'
                className='profile__form-input'
                autoComplete='on'
                required
                disabled={!isEditing}
              />
            </label>
          </fieldset>
        </div>
        <div className='profile__form-buttons'>
          <span className='profile__form-input-error'>{errorMessage || ''}</span>
        {
          isEditing ?
            <button
              className={`profile__form-save-button ${errorMessage !== '' && 'profile__form-save-button_disabled'}`}
              type='submit'>Сохранить</button> :
            <>
              <button 
                className='profile__form-button profile__account-edit'
                type='button'
                onClick={() => setIsEditing(true)}>Редактировать</button>
              <button 
                className='profile__form-button profile__account-exit'
                type='button'
                onClick={onLogout}>Выйти из аккаунта</button>
            </>
        }
        </div>
      </form>
    </section>
    </>    
  );
}

export default Profile;