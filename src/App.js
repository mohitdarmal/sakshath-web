import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import ErrorPage from "./Pages/Error"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import { Helmet } from 'react-helmet';
import SharedLayout from './Pages/SharedLayout';

function App() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Sakshath Technology</title>
        <meta name="description" content="Digitise Your Business" />
      </Helmet>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
      </Routes>
      </>
  );
}

export default App;
