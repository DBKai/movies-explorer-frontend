import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound(){
  const navigate = useNavigate();
  return (
    <section className='notfound'>
      <div className='notfound-container'>
        <h1 className='notfound__caption'>404</h1>
        <p className='notfound__text'>Страница не найдена</p>
      </div>
      <button className='notfound__back-button' onClick={() => navigate(-1)}>Назад</button>
    </section>
  );
}

export default NotFound;