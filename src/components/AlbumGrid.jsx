import React, { Component } from 'react'
import { AlbumCard } from './AlbumCard'
import { Container, Row, Col, Card } from 'react-bootstrap'

import API_KEY from "../config.json";

import logo from '../img/lastfmlogo.png'

const userName = [
    'konstantysz7',
    'etiennedoerr',
    'arsalla',
    'plnwslwsk'
]
var method = [
    'user.getTopAlbums',
    'user.getWeeklyTrackChart'
]
var album_limit = 50;

function urlAdress(met = 0, user = 0, limit = album_limit, api = API_KEY) {
    return `https://ws.audioscrobbler.com/2.0/?method=${method[met]}&user=${userName[user]}&api_key=${api}&limit=${limit}&format=json`;
}


export default class AlbumGrid extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch(urlAdress(0))
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    albumToAlbumGrid = album => {
        const rank = album['@attr'].rank;
        const album_name = album.name;
        const artist = album.artist.name;
        const cover = album.image[3]['#text'];
        const playcount = album.playcount;
        const key = album.mbid;
        return <AlbumCard key={key} rank={rank} playcount={playcount} artist={artist} album_name={album_name} cover={cover} />;
    };

    render() {
        if (!this.state.data.topalbums) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Card className="mx-auto my-5 text-center py-5">
                                <Card.Img src={logo} className="w-50 rounded mx-auto d-block"/>
                                <Card.Body>
                                    Loading...
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }

        return (
            <div>
                <br /><br />
                <Container fluid={true}>
                    <Col lg={16}>
                        <Row className="justify-content-md-center">
                            {this.state.data.topalbums.album.map(this.albumToAlbumGrid)}
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}