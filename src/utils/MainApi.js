const BASE_URL = 'https://api.movie.dkay.ru'; // 'http://localhost:3001'

async function login({ email, password }) {
  return await fetch(`${BASE_URL}/signin`, {
    method: 'POST',  
    headers: {
      "Content-Type": "application/json",
    },    
    body: JSON.stringify({
      email, password
    })
  })
  .then(checkResponse);
}

async function register({ name, email, password }) {
  return await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },    
    body: JSON.stringify({
      name, email, password
    })
  })
  .then(checkResponse);
}

async function getUserInfo() {
  return await fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`
    }      
  })
  .then(checkResponse);
}

async function setUserInfo({name, email}) {
  return await fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(checkResponse);
}

async function getSavedMovies() {
  return await fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`
    }   
  })
  .then(checkResponse);
}

async function addToSavedMovies(movie) {
  return await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: movie.country || '',
      director: movie.director || '',
      duration: movie.duration || '',
      year: movie.year || '',
      description: movie.description || '',
      image: movie.image || '',
      trailerLink: movie.trailerLink || '',
      nameRU: movie.nameRU || '',
      nameEN: movie.nameEN || '',
      thumbnail: movie.image || '',
      movieId: movie.movieId
    })
  })
  .then(checkResponse);
}

async function deleteFromSavedMovies(id) {
  return await fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }   
  })
  .then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.status.toString());
}

export { 
  login, 
  register, 
  getUserInfo, 
  setUserInfo, 
  getSavedMovies,
  addToSavedMovies,
  deleteFromSavedMovies
}