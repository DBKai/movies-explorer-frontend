import './AboutProject.css';

function AboutProject() {
  return (
    <div className='aboutproject'>
      <h2 className='aboutproject__heading'>О проекте</h2>
      <div className='aboutproject__info'>
        <p className='aboutproject__title'>Дипломный проект включал 5 этапов</p>
        <p className='aboutproject__title'>На выполнение диплома ушло 5 недель</p>
        <p className='aboutproject__content'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='aboutproject__content'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>      
      </div>
      <div className='aboutproject__duration'>
        <div className='aboutproject__stage-duration aboutproject__one-week-duration'>1 неделя</div>
        <div className='aboutproject__stage-duration aboutproject__four-week-duration'>4 недели</div>
        <div className='aboutproject__stage-name'>Back-end</div>
        <div className='aboutproject__stage-name'>Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;