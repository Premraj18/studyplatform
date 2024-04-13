import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Layout/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
