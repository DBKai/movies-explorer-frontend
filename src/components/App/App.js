import './App.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
          path='/' 
          element={
            <>              
              <Promo /> 
              <NavTab />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <SearchForm />
          }
        />
      </Routes>

    </>
  );
}

export default App;
