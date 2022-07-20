import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext'
import SideBar from '../elements/SideBar'
import Spinner from '../elements/Spinner'
import PublicPlaylists from './PublicPlaylists'
import RecentlyPlayed from './RecentlyPlayed'
import SummaryReport from './SummaryReport'
import TopArtists from './TopArtist'
import TopTracks from './TopTracks'


const SummaryContainer = styled.div`
  display:flex;
  `
const SummaryDataContainer = styled.div`
width:80%;
`

function Summary() {

  const tokenContext = useContext(TokenContext);
  const loading = tokenContext.loading

  return (
    <>

      {
        !loading
          ?
          <SummaryContainer>

            {/* SETTING UP THE COMPONENTS */}
            <SummaryDataContainer>
              <SummaryReport />
              <TopTracks num={10} summary={true}/>
              <TopArtists num={10} summary={true}/>
              <RecentlyPlayed num={10}  />
              <PublicPlaylists summary={true} />
            </SummaryDataContainer>

            <SideBar />
          </SummaryContainer>
          :

          <Spinner />
      }

    </>
  )
}

export default Summary