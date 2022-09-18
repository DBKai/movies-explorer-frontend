import './Techs.css';

function Techs() {
  return (
    <div className='techs'>
      <h2 className='techs__heading'>Технологии</h2>
      <p className='techs__caption'>7 технологий</p>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        <ol className='techs__item'>HTML</ol>
        <ol className='techs__item'>CSS</ol>
        <ol className='techs__item'>JS</ol>
        <ol className='techs__item'>React</ol>
        <ol className='techs__item'>Git</ol>
        <ol className='techs__item'>Express.js</ol>
        <ol className='techs__item'>mongoDB</ol>
      </ul>
    </div>
  );
}

export default Techs;