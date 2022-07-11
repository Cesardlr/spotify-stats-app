import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { TokenContext } from '../context/TokenContext';
import SectionTitle from '../elements/SectionTitle';
import Spinner from '../elements/Spinner';
import TracksTable from '../elements/TracksTable';
import theme from '../theme';
import { getRecentTracks } from '../utils/getData';

// DESIGN
const RecentTracksContainer = styled.div`
  display:flex;
  width: ${props => props.summary ? '80%' : '100%'};
  border-right: ${props => props.summary && '1px solid' + theme.purple};
`

function RecentlyPlayed({ summary, num }) {

  // We get the token from the context
  const tokenContext = useContext(TokenContext);
  const recentTracks = tokenContext.recentTracks
  const loading = tokenContext.loading

  // Function for getting the date in the local time zone
  const getDate = (indx) => {
    if (!loading) {
      const utcDate = recentTracks[indx].played_at
      const date = new Date(utcDate)
      return date.toLocaleString().split(',')
    }
  }

  const tracks = num ? recentTracks.slice(0, num) : recentTracks 

  return (

    <>

      {!loading ?
        <>
          <SectionTitle>Recently Played</SectionTitle>

          {/* If it is inside the summary component it'll have some changes in it's design so I added the prop to the container */}
          <RecentTracksContainer summary={summary && true}>
            <TracksTable songs={tracks} at={getDate} />
          </RecentTracksContainer>
        </>

        :

        !summary && <Spinner />

      }
    </>
  )
}

export default RecentlyPlayed