import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
.card{
    width: 18em;
    height: 25em;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    transition: transform 2.5s, filter 3s ease-in-out;
}

.card:hover {
    transform: scale(1.1);
  }
`;

export const AlbumCard = ({ rank, artist, album_name, cover, playcount }) => {
    return (
        <Styles>
            <Card body={true} bg={'dark'} text={'light'} border={'light'} >
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Card.Title>#{rank} {album_name}</Card.Title>
                    <Card.Subtitle>{artist}</Card.Subtitle>
                    <Card.Text>Played: {playcount}</Card.Text>
                </Card.Body>
            </Card>
        </Styles>
    );
}