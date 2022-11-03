import React from 'react';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Heroes from './pages/Heroes/Heroes';
import Home from './pages/Home/Home';
import AboutGame from './pages/AboutGame/AboutGame';
import News from './pages/News/News';
import DragonsBlood from './pages/News/pages/DragonsBlood/DragonsBlood';
import ArlingtonMajor from './pages/News/pages/ArlingtonMajor/ArlingtonMajor';
import ShortFilm from './pages/News/pages/ShortFilm/ShortFilm';
import ChestEndless from './pages/News/pages/ChestEndless/ChestEndless';
import WorkshopCall from './pages/News/pages/WorkshopCall/WorkshopCall';
import BattleReportr from './pages/News/pages/BattleReport/BattleReport';
import International from './pages/News/pages/International/International';
import StockholmMajor from './pages/News/pages/StockholmMajor/StockholmMajor'
import SpringCleaning from './pages/News/pages/SpringCleaning/SpringCleaning'
import SpringTour from './pages/News/pages/SpringTour/SpringTour'
import DotaPlus from './pages/News/pages/DotaPlus/DotaPlus'
import GameplayUpdate from './pages/News/pages/GameplayUpdate/GameplayUpdate'
import MainHeader from './components/Main_heder';
import Footer from './components/Footer';

function App () {
  return (
      
      <BrowserRouter>
      <MainHeader/>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path='/heroes' element ={<Heroes/>}/>
          <Route path='/AboutGame' element ={<AboutGame/>}/>
          <Route path='/news' element ={<News/>}/>
          <Route path='/DragonsBlood' element ={<DragonsBlood/>}/>
          <Route path='/ArlingtonMajor' element={<ArlingtonMajor/>}/>
          <Route path='/ShortFilm' element={<ShortFilm/>}/>
          <Route path='/ChestEndless' element={<ChestEndless/>}/>
          <Route path='/WorkshopCall' element={<WorkshopCall/>}/>
          <Route path='/BattleReportr' element={<BattleReportr/>}/>
          <Route path='/International' element={<International/>}/>
          <Route path='/StockholmMajor' element={<StockholmMajor/>}/>
          <Route path='/SpringCleaning' element={<SpringCleaning/>}/>
          <Route path='/SpringTour' element={<SpringTour/>}/>
          <Route path='/DotaPlus' element={<DotaPlus/>}/>
          <Route path='/GameplayUpdate' element={<GameplayUpdate/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App ;