import React, { useContext } from 'react'
import { TokenContext } from '../context/TokenContext';
import {getTopTracks, getTopArtists} from '../utils/getData'

function Home() {

  const tokenContext = useContext(TokenContext);
  const _token = tokenContext.token

  return (
    <>
      <h1>Home</h1>
      <button onClick={()=> console.log(getTopTracks(_token))}>get top tracks</button>
      {/* <button onClick={()=> console.log(getTopArtists(_token))}>get top Artists</button> */}
    </>
  )
}

export default Home