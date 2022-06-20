import React, { useContext } from 'react';
import WebFont from 'webfontloader';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Logo from './images/Icons/favicon.png'
import Home from './components/Home';
import HomeLogIn from './components/HomeLogIn'
import TopArtist from './components/TopArtist';
import TopTracks from './components/TopTracks';
import Summary from './components/Summary';
import { NotFoundPage } from './components/NotFoundPage';
import Header from './elements/Header';
import { TokenContext } from './context/TokenContext'
import styled from 'styled-components';
import theme from './theme';


// Private route for if the user wants to access other pages without logging in
function PrivateRoute({ children }) {
  const tokenContext = useContext(TokenContext);

  // If the loading state is true it'll render only a text saying loading... until the app gets the token
  if (tokenContext.loading) {
    return <h1>Loading...</h1>
  }
  else {

    // Else if there's a token it'll return the children
    if (tokenContext.token) {
      return children

      // If there's no token it'll return to /log-in
    } else {
      return <Navigate to="/log-in" />;
    }
  }

}

// Private route but for if the user wants to access the log in page when it is already logged in
function LogInPrivateRoute({ children }) {
  const tokenContext = useContext(TokenContext);

  // If there's a token it'll return to /
  if (tokenContext.token) {
    return <Navigate to="/" />;
  } else {
    return children
  }
}

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
        <link rel="icon" href={Logo} type="image/x-icon" sizes="16x16" />
      </Helmet>



      {/* Adding the routes to the app */}
      <BrowserRouter>
          <Header />
        <Routes>

          <Route
            path="/log-in"
            element={
              <LogInPrivateRoute>
                <HomeLogIn />
              </LogInPrivateRoute>
            }
          />


          <Route
            path="/top-tracks"
            element={
              <PrivateRoute >
                <TopTracks />
              </PrivateRoute>
            }
          />

          <Route
            path="/top-artist"
            element={
              <PrivateRoute >
                <TopArtist />
              </PrivateRoute>
            }
          />


          <Route
            path="/summary"
            element={
              <PrivateRoute >
                <Summary />
              </PrivateRoute>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute >
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="*"
            element={
              <NotFoundPage />
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
