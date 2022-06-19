import WebFont from 'webfontloader';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Logo from './images/Icons/stats-icon.svg'
import Home from './components/Home';
import HomeLogIn from './components/HomeLogIn'
import TopArtist from './components/TopArtist';
import TopTracks from './components/TopTracks';
import Summary from './components/Summary';
import { NotFoundPage } from './components/NotFoundPage';
// import PrivateRoute from './elements/PrivateRoute';
// import { MissingRoute } from './elements/MissingRoute';
// import Header from './elements/Header';
// import { TokenProvider } from './context/TokenContext';

function App() {

  WebFont.load({
    google: {
      families: ['Montserrat:400,500,600,700', 'sans serif']
    }
  });

  return (
    <>
      <Helmet>
        <title>Spotify Stats</title>
        <link rel="shortcut icon" href={Logo} type="image/x-icon" />
      </Helmet>

      <BrowserRouter>
        <Routes>

          <Route
            path="/log-in"
            element={
              <HomeLogIn />
            }
          />


          <Route
            path="/top-tracks"
            element={
              // <PrivateRoute >
              <TopTracks />
              // </PrivateRoute>
            }
          />

          <Route
            path="/top-artist"
            element={
              // <PrivateRoute >
              <TopArtist />
              // </PrivateRoute>
            }
          />


          <Route
            path="/summary"
            element={
              // <PrivateRoute >
              <Summary />
              // </PrivateRoute>
            }
          />

          <Route
            exact
            path="/"
            element={
              // <PrivateRoute >
              <Home />
              // </PrivateRoute>
            }
          />

          <Route
            path="*"
            element={
              // <PrivateRoute >
              <NotFoundPage />
              // </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
