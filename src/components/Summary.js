import React from 'react'
import RecentlyPlayed from './RecentlyPlayed'
import TopArtists from './TopArtist'
import TopTracks from './TopTracks'

function Summary() {
  return (
    <>

    {/* SETTING UP THE COMPONENTS */}
    <TopTracks num={10}/>
    <TopArtists num={10}/>
    <RecentlyPlayed num={10} summary={true}/>
    </>
  )
}

export default Summary