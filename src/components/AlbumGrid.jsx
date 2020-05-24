import React, { Component } from 'react'
import { AlbumCard } from './AlbumCard'
import { Container, Row, Col, Card } from 'react-bootstrap'

import logo from '../img/lastfmlogo.png'

export default class AlbumGrid extends Component {

    constructor(props) {
        super(props)
        this.state = {data: this.props.topalbums}
        console.log(this.state.data)
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
        if (typeof this.state.data!="undefined") {
            return (
                <div>
                    <br /><br />
                    <Container fluid={true}>
                        <Col lg={16}>
                            {(typeof this.state.data !='undefined') ? (
                                <Row className="justify-content-md-center">
                                    {this.state.data.topalbums.album.map(this.albumToAlbumGrid)}
                                </Row>
                            ) : ('')}
                        </Col>
                    </Container>
                </div>
            )
        } else {
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
    }
}