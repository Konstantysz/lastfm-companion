import React, { Component } from 'react'
import { TopTrack } from './TopTrack'
import { Container, Row, Col, Table, Card } from 'react-bootstrap'

import logo from '../img/lastfmlogo.png'

const apiKey = '23d99d2685c14ac5aea4a0bb283a059d'
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

function urlAdress(met = 0, user = 0, limit = album_limit, api = apiKey) {
    return `https://ws.audioscrobbler.com/2.0/?method=${method[met]}&user=${userName[user]}&api_key=${apiKey}&limit=${album_limit}&format=json`;
}


export default class TopTrackTable extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch(urlAdress(1))
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    trackToTrackTable = track => {
        const track_name = track.name;
        const rank = track['@attr'].rank;
        const album_cover = track.image[0]['#text'];
        const artist = track.artist['#text'];
        const playcount = track.playcount;
        const key = track.mbid;
        return <TopTrack key={key} rank={rank} playcount={playcount} artist={artist} album_cover={album_cover} track_name={track_name} />;
    };

    render() {
        if (!this.state.data.weeklytrackchart) {
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
                <Container fluid={false}>
                    <Col lg={16}>
                        <Row className="justify-content-md-center">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        {/* <th>Album</th> */}
                                        <th>Track</th>
                                        <th>Artist</th>
                                        <th>Played</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.weeklytrackchart.track.map(this.trackToTrackTable)}
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}




