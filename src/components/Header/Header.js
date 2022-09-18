import './Header.css';

function App() {
  return (
    <div className='header'>
      <div className='header__logo'></div>
      <div className='header__login'>        
        <button className='header__link signup'>Регистрация</button>
        <button to='/signin' className='header__link signin'>Войти</button>
      </div>
    </div>
  );
}

export default App;
