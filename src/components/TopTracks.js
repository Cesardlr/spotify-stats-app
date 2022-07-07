import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext';
import axios from 'axios'
import SideBar from '../elements/SideBar';
import TracksTable from '../elements/TracksTable';
import SectionTitle from '../elements/SectionTitle';

const TopTracksContainer = styled.div`
  display:flex;
`

function TopTracks({ num }) {

  const tokenContext = useContext(TokenContext);
  const _token = tokenContext.token

  const [timeRange, setTimeRange] = useState("short_term")
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const number = num

  // Use effect for getting the top tracks from spotify api
  useEffect(() => {
    async function getTopTracks() {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks",

          {
            headers: {
              Authorization: `Bearer ${_token}`,
              "Content-Type": "application/json",
            },

            params: {
              time_range: timeRange,

              // Here I did this dynamic so I could get another number of tracks if I want it passing it as a parameter to the component, (This is for the summary section)
              limit: number ? number : 50,
              offset: 0,
            }

          })

        // setting up the returned data as the tracks state
        setTracks(data)
        setLoading(false)
      }
      catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) tokenContext.logOut()
      }
    }

    getTopTracks()

  }, [timeRange])


  return (
    <>
      <SectionTitle>Top Tracks</SectionTitle>
      <TopTracksContainer>

        {!loading &&
          <>
            <TracksTable songs={tracks.items} />
            <SideBar setTimeRange={setTimeRange} playlist={true} />
          </>
        }

      </TopTracksContainer>
    </>
  )
}

export default TopTracks