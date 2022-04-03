import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/details/:id' element={<DetailView />} />
          <Route exact path='/create' element={<CreateView />} />
          <Route exact path='/update/:id' element={<UpdateView />} />
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>


        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
