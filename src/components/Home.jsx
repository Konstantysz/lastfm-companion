import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import logo from '../img/lastfmlogo.png'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card className="mx-auto my-5 text-center py-5">
                            <Card.Img src={logo} className="w-50 rounded mx-auto d-block"/>
                            <Card.Body>
                                Welcome to my app that let you see your statistics from last.fm site.
                            </Card.Body>
                            <Button className="mx-auto my-1 text-center" href="https://www.last.fm/api/auth" variant="danger">Login to Last.fm</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}