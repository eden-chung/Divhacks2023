import React from 'react';
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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import BookPage from './BookPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/" element={<BookPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
