import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import styled from 'styled-components';

import logo from '../img/logo.png';

const Styles = styled.div`
.navbar{
    background-color: #191414;
}

.navbar-brand {
    color: white;
    &:hover{
        color: white;
    }
}

.navbar-nav .nav-link {
    color: white;
    margin-right: 10px;
    border: 2px solid white;
    border-radius: 5px;

    &:hover{
        border: 2px solid #1db954;
        color: #1db954;
    }
}
`;

export const NaviBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' music.my'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/topalbums'>Albums Of All Time</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/weeklychart'>Weekly Track Chart</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
