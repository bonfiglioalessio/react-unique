import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import "./style/app.css";
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {BlogPage} from './pages/BlogPage';
import {ContactPage} from './pages/ContactPage';
import {ErrorPage} from './pages/ErrorPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Header/>
      <ColorModeSwitcher />
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/blog">
          <BlogPage/>
        </Route>
        <Route path="/contatti">
          <ContactPage/>
        </Route>
        <Route path="">
          <ErrorPage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </ChakraProvider>
  );
}

export default App;
