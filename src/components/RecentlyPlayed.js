import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { TokenContext } from '../context/TokenContext';
import SectionTitle from '../elements/SectionTitle';
import TracksTable from '../elements/TracksTable';
import theme from '../theme';

// DESIGN
const RecentTracksContainer = styled.div`
  display:flex;
  width: ${props => props.summary ? '80%' : '100%'};
  border-right: ${props => props.summary && '1px solid' + theme.purple};
`

function RecentlyPlayed({ summary, num }) {

  // We get the token from the context
  const tokenContext = useContext(TokenContext);
  const _token = tokenContext.token


  // We set the loading and the recent tracks state
  const [recentTracks, setRecentlyTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const number = num


  // Use effect for getting the top tracks from spotify api
  useEffect(() => {
    async function getRecentTracks() {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/player/recently-played",

          {
            headers: {
              Authorization: `Bearer ${_token}`,
              "Content-Type": "application/json",
            },

            params: {
              limit: 50,
              after: 1484811043508,
            }

          })


        // If theres the number parameter in the function, then I'll slice the items array to that number, if not I'll get all of the items in it
        number 
          ? 
          setRecentlyTracks(data.items.slice(0, number))
          :
        setRecentlyTracks(data.items)


        setLoading(false)
      }
      catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) tokenContext.logOut()
      }
    }

    getRecentTracks()

  }, [])


  // Function for getting the date in the local time zone
  const getDate = (indx) => {
    if (!loading) {
      const utcDate = recentTracks[indx].played_at
      const date = new Date(utcDate)
      return date.toLocaleString().split(',')
    }
  }

  return (

    <>

      <SectionTitle>Recently Played</SectionTitle>

      {/* If it is inside the summary component it'll have some changes in it's design so I added the prop to the container */}
      <RecentTracksContainer summary={summary && true}>
        {!loading &&
          <TracksTable songs={recentTracks} at={getDate} />
        }
      </RecentTracksContainer>

    </>
  )
}

export default RecentlyPlayed