import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../context/TokenContext'
import ImageBlock from '../elements/ImageBlock'
import SectionTitle from '../elements/SectionTitle'
import SideBar from '../elements/SideBar'
import Spinner from '../elements/Spinner'
import { getPlaylists } from '../utils/getData'
import NoImage from './../images/NoImage.png'



const PublicPlaylistsContainer = styled.div`
    display:flex;
    `

const PlaylistContainer = styled.div`
    margin-right:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width:${props => props.large ? '100%' : '80%'};
`

function PublicPlaylists(summary) {

  const tokenContext = useContext(TokenContext);
    const token = tokenContext.token
    const user = tokenContext.user
    const logOut = tokenContext.logOut

    const [playlists, setPlaylists] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPlaylists(logOut, token, user.id)
            .then(res => setPlaylists(res.items))
            .then(()=> setLoading(false))
    }, [token])

    console.log('p: ',playlists)

    return (
        <>
            {!loading ?
                <>
                    <SectionTitle>Your Playlists</SectionTitle>
                    <PublicPlaylistsContainer>

                        <>
                            <PlaylistContainer large={summary}>
                                {
                                    playlists.map((pl, index) => {
                                        return (
                                            <ImageBlock
                                                url={pl.external_urls.spotify}
                                                img={pl.images.length > 0 ? pl.images[0].url : NoImage }
                                                num={index + 1}
                                                name={pl.name}
                                                key={pl.id}
                                            />
                                        )
                                    })
                                }
                            </PlaylistContainer>

                            {!summary && <SideBar playlist={false} />}
                        </>

                    </PublicPlaylistsContainer>
                </>

                :

                !summary && <Spinner />
            }
        </>
    )
}

export default PublicPlaylists