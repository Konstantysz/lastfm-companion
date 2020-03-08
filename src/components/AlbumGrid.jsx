import React, { Component } from 'react'
import { AlbumCard } from './AlbumCard'
import { Container, Row, Col } from 'react-bootstrap'

export default class AlbumGrid extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.setState({
            data: this.props
        })
        console.log(this.props)
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
        if (typeof this.state.data.topalbums=="undefined") {
            return <span>Loading...</span>;
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