import React from 'react';
import { GlobalProvider } from "./context/GlobalContext";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import ManageData from './components/manageData';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/manage-data' element={<ManageData/>}/>
          </Routes>

        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
