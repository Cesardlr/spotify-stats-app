import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext';
import axios from 'axios'
import SideBar from '../elements/SideBar';
import Artist from '../elements/Artist';
import SectionTitle from '../elements/SectionTitle';


// CREATING STYLES
const TopArtistsContainer = styled.div`
    display:flex;
    `

const ArtistContainer = styled.div`
    margin-right:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width:80%;
`

function TopArtists({num, summary}) {

  const tokenContext = useContext(TokenContext);
  const _token = tokenContext.token

  const [timeRange, setTimeRange] = useState("short_term")
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(true)
  const number = num


  // Use effect for getting the top Artists from spotify api
  useEffect(() => {
    async function getTopArtists() {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists",

          {
            headers: {
              Authorization: `Bearer ${_token}`,
              "Content-Type": "application/json",
            },

            params: {
              time_range: timeRange,
              limit: number ? number : 50,
              offset: 0,
            }

          })

        // setting up the returned data as the Artists state
        setArtists(data)
        setLoading(false)
      }
      catch (err) {
        // The response 401 appears when the token is incorrect or expired, so I delete the token from localStorage and go to log in page
        if (err.response.status === 401) tokenContext.logOut()
      }
    }

    getTopArtists()
  }, [timeRange])

  return (
    <>

      <SectionTitle>Top Artists</SectionTitle>
      <TopArtistsContainer>

        {!loading &&
          <>
            <ArtistContainer>
              {
                artists.items.map((artist, index) => {
                  return (
                    <Artist
                      url={artist.external_urls.spotify}
                      img={artist.images[0].url}
                      num={index + 1}
                      name={artist.name}
                      key={artist.id}
                    />
                  )
                })
              }
            </ArtistContainer>
            {!summary && <SideBar setTimeRange={setTimeRange} playlist={false} />}
          </>
        }

      </TopArtistsContainer>
    </>
  )
}

export default TopArtists