import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
.card{
    width: 18rem;
    height: 27rem;
    margin: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-bottom-radius: 20px;
    transition: transform 2.5s, filter 3s ease-in-out;
}

.card:hover {
    transform: scale(1.1);
  }
`;

export const AlbumCard = ({ rank, artist, album_name, cover, playcount }) => {
    return (
        <Styles>
            <Card bg={'secondary'} text={'light'}>
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                <Card.Text>
                    #{rank} {album_name} - {artist} 
                    <br/>
                    Played: {playcount}
                </Card.Text>
                </Card.Body>
            </Card>
        </Styles>
    );
}