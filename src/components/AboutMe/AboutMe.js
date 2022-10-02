import './AboutMe.css';
import student from '../../images/student.jpg';

function AboutMe() {
  return (
    <section className='aboutme'>
      <h2 className='aboutme__heading'>Студент</h2>
      <div className='aboutme__container'>
        <div className='aboutme__text'>
          <div className='aboutme__text-container'>
            <p className='aboutme__name'>Дмитрий</p>
            <p className='aboutme__info'>Фронтенд-разработчик, 32 года</p>
            <p className='aboutme__description'>Я родился и живу в городе Сухой Лог, разрабатываю программы на стеке C# .NET Windows Forms. С 2021 решил поменять десктопные приложения на веб, начал учиться в Яндекс Практикуме. На фронтенде останавливаться не планирую, моя цель - fullstack developer.</p>
          </div>
          <a 
            className='aboutme__link' 
            href='https://github.com/dbkai'
            target='_blank' 
            rel='noopener noreferrer'>
            Github
          </a>    
        </div>
        <img className='aboutme__photo' src={student} alt='Фото студента'></img>
      </div>
    </section>
  );
}

export default AboutMe;