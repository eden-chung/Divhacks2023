import React from 'react';
import SignIn from "./components/SignIn";
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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import Home from './Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
      <SignIn />
    </ChakraProvider>
  );
}

export default App;
