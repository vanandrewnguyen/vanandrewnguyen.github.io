import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

import LandingPage from './screens/LandingPage';
import AboutPage from './screens/AboutPage';
import ProjectsPage from './screens/ProjectsPage';
import ArtPage from './screens/ArtPage';
import Nav from './components/Nav';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    "fontFamily": `"Cambria", "Helvetica", "Arial", sans-serif`,
  }
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/art' element={<ArtPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
