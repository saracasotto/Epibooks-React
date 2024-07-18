import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookDetails from './components/BookDetails';
import { Container } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BrowserRouter>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container>
        <Welcome />
        <Routes>
        <Route path="/" element={<AllTheBooks searchQuery={searchQuery} />} />   
        <Route path="/details/:asin" element={<BookDetails />}/>   
        </Routes>
      </Container>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
