import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
.jumbotronn{
    height: 1000px;
}
`;

export default class Home extends Component {
    render() {
        return (
            <Styles>
                <Jumbotron>
                    <Container>
                        Welcome to home page
                    </Container>
                </Jumbotron>
            </Styles>
        );
    }
}