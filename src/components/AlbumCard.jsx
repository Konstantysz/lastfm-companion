import React from 'react'
import { Card } from 'react-bootstrap'

export const AlbumCard = ({ rank, artist, album_name, cover, playcount }) => {
    return (
        <Card style={{ width: '18rem', height: '27rem', margin: '1rem'}} bg={'secondary'} text={'light'}>
            <Card.Img variant="top" src={cover} />
            <Card.Body>
            <Card.Text>
                #{rank} {album_name} - {artist} 
                <br/>
                Played: {playcount}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}