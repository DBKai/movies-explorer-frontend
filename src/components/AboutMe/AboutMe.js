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
            <p className='aboutme__description'>Перешел в сферу веб-разработки в 2022 году. До этого создавал приложения на стеке C# .NET WinForms. Веб-разработка привлекает тем, что с ее помощью можно более гибко формировать интерфейс и решать задачи UX.</p>
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