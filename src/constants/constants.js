const EMAIL_INCORRECTED = 'Укажите адрес электронной почты в формате \'user@yandex.ru\'';
const USERNAME_INCORRECTED = 'Допустимо использовать только латиницу, кирилицу, пробел или дефис';
const SOURCE_NOT_FOUND = 'Запрашиваемый ресурс не найден';
const USER_EMAIL_EXISTS = 'Пользователь с таким email уже существует';
const EMAIL_OR_PASSWORD_INCORRECTED = 'Вы ввели неправильный логин или пароль';
const NOTHING_FOUND = 'Ничего не найдено';
const SUCCESS_SAVE_DATA = 'Данные успешно сохранены';
const SERVER_ERROR = 'На сервере произошла ошибка';
const REGISTER_USER_ERROR = 'При регистрации пользователя произошла ошибка';
const REQUEST_DURING_ERROR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const EMPTY_SEARCH_TEXT_ERROR = 'Нужно ввести ключевое слово';
const UPDATE_PROFILE_ERROR = 'При обновлении профиля произошла ошибка';
const REQUEST_USERDATA_ERROR = 'Ошибка получения данных о пользователе';
const SAVED_MOVIE_ADDING_ERROR = 'Произошла ошибка при добавлении фильма в сохраненные фильмы';
const SAVED_MOVIE_DELETING_ERROR = 'Произошла ошибка при удалении фильма из сохраненных фильмов';

module.exports = {
  USER_EMAIL_EXISTS,
  EMAIL_OR_PASSWORD_INCORRECTED,
  SERVER_ERROR,
  EMAIL_INCORRECTED,
  SOURCE_NOT_FOUND,
  REQUEST_DURING_ERROR,
  EMPTY_SEARCH_TEXT_ERROR,
  NOTHING_FOUND,
  REGISTER_USER_ERROR,
  SUCCESS_SAVE_DATA,
  UPDATE_PROFILE_ERROR,
  REQUEST_USERDATA_ERROR,
  USERNAME_INCORRECTED,
  SAVED_MOVIE_ADDING_ERROR,
  SAVED_MOVIE_DELETING_ERROR,
};
