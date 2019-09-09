import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" >
            <Navbar.Brand href="/">Sudoku</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/game">Game</Link>
                <Link className="nav-link" to="/statistics">Statistics</Link>
                <Link className="nav-link" to="/about">About</Link>
            </Nav>
            
        </Navbar>
    );
};


export default AppNavbar;
