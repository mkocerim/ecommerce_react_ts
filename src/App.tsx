import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/home-page/home_page';
import '@splidejs/splide/css'
import Footer from './components/footer/footer';
import { useSelector } from 'react-redux';
import { RootStateType } from './redux/store';
import useApi from './hooks/useApi';
import { CategoryType } from './types';
import { useDispatch } from 'react-redux';
import { setCategories } from './redux/categorySlice';
import CategoryDetailsPage from './pages/category-details-page/category_details_page';
import { AxiosResponse } from 'axios';

function App() {

  const authState = useSelector((state:RootStateType)=>{
    

    return state.auth
  })
  const dispatch=useDispatch()
  const api= useApi()

  const categoryState = useSelector((state:RootStateType)=> state.category)
  console.log('CAT STATE', categoryState)

  if(categoryState.initialized===false){

    const params= {page:1, itemsPerPage: 30}
    // api.get('/shop/taxons',{params:{page:1, itemsPerPage:30}})
      api.get<CategoryType[]>('shop/taxons', {params})

      .then((response:AxiosResponse<CategoryType[]>)=>{
        console.log('>>API  DATA',response)
        console.log('>>DATA', response.data)
                
        // dispatch(setCategories(response.data))  

        const dispatchData= setCategories(response.data)
        console.log('DISPATCH DATA',dispatchData)
        dispatch(dispatchData)
        
  })
  

  }


  
  return (
    <div>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path={'/category-details/:category_code'} element={<CategoryDetailsPage/>}/>
      


      </Routes> 


      <Footer/>

    
    </BrowserRouter>

</div>
  );
}

export default App;
