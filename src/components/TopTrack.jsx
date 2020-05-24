import React from 'react'

export const TopTrack = ({ rank, artist, album_cover, track_name, playcount }) => {
    return (
        <tr>
            <td>{rank}</td>
            {/* <td><img alt="" src={album_cover} height="30" width="30" /></td> */}
            <td>{track_name}</td>
            <td>{artist}</td>
            <td>{playcount}</td>
        </tr >
    );
}