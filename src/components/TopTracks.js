import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext';
import axios from 'axios'
import SideBar from '../elements/SideBar';
import TracksTable from '../elements/TracksTable';
import SectionTitle from '../elements/SectionTitle';
import Spinner from '../elements/Spinner';
import { getTopTracks } from '../utils/getData';

const TopTracksContainer = styled.div`
  display:flex;
`

function TopTracks({ num, summary}) {

  const tokenContext = useContext(TokenContext);
  const topTracks = tokenContext.topTracks
  const loading = tokenContext.loading

  const tracks = num ? topTracks.slice(0, num) : topTracks 

  return (
    <>
      {!loading ?
        <>
          <SectionTitle>Top Tracks</SectionTitle>
          <TopTracksContainer>

            <>
              <TracksTable summary={summary && true} songs={tracks} />
              {!summary && <SideBar playlist={true} /> }
            </>

          </TopTracksContainer>
        </>

        :

        !summary && <Spinner />

      }
    </>
  )
}

export default TopTracks