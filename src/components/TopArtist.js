import React, { useContext} from 'react'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext';
import axios from 'axios'
import SideBar from '../elements/SideBar';
import ImageBlock from '../elements/ImageBlock';
import SectionTitle from '../elements/SectionTitle';
import Spinner from '../elements/Spinner';
import { getTopArtists } from '../utils/getData';


// CREATING STYLES
const TopArtistsContainer = styled.div`
    display:flex;
    `

const ArtistContainer = styled.div`
    margin-right:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width:${props => props.large ? '100%' : '80%'};
`

function TopArtists({num, summary}) {

  const tokenContext = useContext(TokenContext);
  const topArtists = tokenContext.topArtists
  const loading = tokenContext.loading

  const artists = num ? topArtists.slice(0, num) : topArtists 


  return (
    <>

      {!loading ?
        <>
          <SectionTitle>Top Artists</SectionTitle>
          <TopArtistsContainer>

            <>
              <ArtistContainer large={summary}>
                {
                  artists.map((artist, index) => {
                    return (
                      <ImageBlock
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
              
              {!summary && <SideBar playlist={false} />}
            </>

          </TopArtistsContainer>
        </>

        :

        !summary && <Spinner />
      }
    </>
  )
}

export default TopArtists