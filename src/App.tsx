import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/home-page/home_page';
import '@splidejs/splide/css'
import Footer from './components/footer/footer';
import { useSelector } from 'react-redux';
import { RootStateType } from './redux/store';

function App() {

  const authState = useSelector((state:RootStateType)=>{
    return state.auth
  })

  return (
    <div>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<HomePage/>}/>


      </Routes> 


      <Footer/>

    
    </BrowserRouter>

</div>
  );
}

export default App;
