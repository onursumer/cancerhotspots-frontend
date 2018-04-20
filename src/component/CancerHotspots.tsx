import * as React from 'react';
import {
    Nav, Navbar, NavItem
} from 'react-bootstrap';
import {
    Route, Switch, Link
} from "react-router-dom";
import {
    IndexLinkContainer, LinkContainer
} from "react-router-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';

import Home from "./Home";
import About from "./About";
import Download from "./Download";

// TODO add logo
// https://stackoverflow.com/questions/40857690/how-to-add-icon-to-react-bootstrap-navbar
// const logo = require('../logo.svg');
// <img src={logo} style={{width: 64, height: 64}} alt="logo" />

interface CancerHotspotsProps
{
}

class CancerHotspots extends React.Component<CancerHotspotsProps>
{
    constructor(props: CancerHotspotsProps) {
        super(props);
    }

    public render()
    {
        return (
            <div className="App">
                <Navbar inverse={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">
                                Cancer Hotspots
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
                            <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
                            <LinkContainer to="/download"><NavItem>Download</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/about" component={About}/>
                    <Route exact={true} path="/download" component={Download}/>
                </Switch>
            </div>
        );
    }
}

export default CancerHotspots;