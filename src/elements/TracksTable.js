import styled from 'styled-components'
import theme from '../theme'
import Track from './Track'

// CREATING STYLES
const TableContainer = styled.div`
    width:${props => props.large ? '100%' : props.summary ? '80%' : '80%'};
`

const Table = styled.div`
    width: 100%;
    border-top: ${theme.purple} 1px solid;
`

const TableTop = styled.div`
    display:flex;
    align-items: center;
    width:100%;
`

const TableTopText = styled.h3`
    margin-right:1rem;
    margin-left:1rem;
    width: ${props => props.large ? '30%' : '20%'};
    margin-bottom:10px;
`

const TracksTable = ({ songs, at }) => {

    return (
        // If the at parameter is true, it means I'll use the table for the recently played page, so I don't need the sidebar and I need more space so I set up the large property to true
        <TableContainer large={at ? true : false}>

            <TableTop>
                <>
                    <TableTopText>#</TableTopText>
                    <TableTopText>Track</TableTopText>
                    <TableTopText large={at ? false : true}>Name</TableTopText>
                    <TableTopText large={at ? false : true}>Artist</TableTopText>

                    {/* If theres an At parameter it'll add this column */}
                    {at && <TableTopText >At</TableTopText>}
                </>
            </TableTop>

            <Table>
                {
                    //  Making all of the tracks with the map function from the array thta I got from the API
                    songs.map((item, index) => {
                        return (

                            // If the at parameter exist, then I'll render the track different because the location of the data in the object is different, and I'll add the at prop to the track as well
                            at
                                ?
                                (
                                    <Track
                                        num={index + 1}
                                        img={item.track.album.images[0].url}
                                        imgUrl={item.track.album.external_urls.spotify}
                                        name={item.track.name}
                                        trackUrl={item.track.external_urls.spotify}
                                        artist={item.track.artists[0].name}
                                        artistUrl={item.track.artists[0].external_urls.spotify}
                                        at={[at(index)[0], at(index)[1]]}
                                        key={index}
                                    />
                                )
                                :

                                // Else I'll render the track normally for the TopTracks page
                                (
                                    <Track
                                        num={index + 1}
                                        img={item.album.images[0].url}
                                        imgUrl={item.album.external_urls.spotify}
                                        name={item.name}
                                        trackUrl={item.external_urls.spotify}
                                        artist={item.artists[0].name}
                                        artistUrl={item.artists[0].external_urls.spotify}
                                        key={item.id}
                                    />
                                )
                        )
                    })
                }
            </Table>

        </TableContainer>
    );
}

export default TracksTable;