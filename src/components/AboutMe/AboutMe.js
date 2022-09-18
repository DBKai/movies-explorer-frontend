import './AboutMe.css';
import derick from '../../images/derick-mckinney-kfN-BBbWTWo-unsplash.jpg';

function AboutMe() {
  return (
    <div className='aboutme'>
      <h2 className='aboutme__heading'>Студент</h2>
      <div className='aboutme__container'>
        <div className='aboutme__text'>
          <div>
            <p className='aboutme__name'>Дмитрий</p>
            <p className='aboutme__info'>Фронтенд-разработчик, 32 года</p>
            <p className='aboutme__description'>Я родился и живу в городе Сухой Лог, разрабатываю программы на стеке C# .NET Windows Forms. С 2021 решил поменять десктопные приложения на веб, начал учиться в Яндекс Практикуме. На фронтенде останавливаться не планирую, моя цель - fullstack developer.</p>
          </div>          
          <p className='aboutme__github'>github.com/DBKai</p>      
        </div>
        <img className='aboutme__photo' src={derick} alt='Фото студента'></img>
      </div>
    </div>
  );
}

export default AboutMe;