import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import FilesList from '../components/FilesList';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
   <div className="container">
      <Header />
      <div className="main-content">
    <Routes >

        <Route  path="/" element ={<App/>} />
        <Route  path="/list"  element={<FilesList/>}/>
    </Routes>
               
        </div>
  </div>            
         
    </BrowserRouter>
)

export  default AppRouter;
