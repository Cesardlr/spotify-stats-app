import React, { useContext } from 'react'
import { TokenContext } from '../context/TokenContext';
import getTopTracks from '../utils/getTopTracks'

function Home() {

  const tokenContext = useContext(TokenContext);
  const _token = tokenContext.token

  console.log(_token)

  // TRY 1
  // BQDvfJG1exYFdW7hAtG2wA0WyZwoNwi299LttlVhP6k63veXa8IA0Bj1rNrknxEwEKhoK0QHaoA-liMe2HugR5A9Xj8MJnnFR5m61gv_yVfLvbVh0Rk6m-BwWFGAZbbNZhazLnKq_NUyHMYkfT-aeUmBgj-AjGi555rmsssJptxA5TzIpZBlvSlUSGxp269PMjYO4BE

  // TRY 2
  // BQBEF3YmCHb1PWvck2XPJ0XPU5C5ac7kxVSPr2WvhLZVF42dLz1JhExEbKZ--8IG8Ac-MMLdpp2qklFfGf4u6-zOmqk5ge20Y3mr891lC-55OKbWar76EaK8FOsBe5e0Fi-eu_cswuMEe-OoewwfSYn9l8aGI8fmw85vhvUNtss_89GmFJ6puQ_yjAsIu3AY4wSmGbg

  return (
    <>
      <h1>Home</h1>
      <button onClick={()=> console.log(getTopTracks(_token))}>get top tracks</button>
    </>
  )
}

export default Home