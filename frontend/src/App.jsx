import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Layout/Header';
import Courses from './Components/courses/Courses';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </Router>
  )
}

export default App
