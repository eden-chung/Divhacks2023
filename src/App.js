import React from 'react';
import SignIn from "./components/SignIn";
import SellBooks from "./components/SellBooks";
import './App.css';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import BookPage from './BookPage';
import Message from './Message';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/book/" element={<BookPage />} />
          <Route path="/sell-books" element={<SellBooks />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
