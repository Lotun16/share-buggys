import React from 'react';
import { useState, useRef, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../images/buglogotwo.png';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState('');

    async function handleLogout() {
        setError('')

        try{
            await logout()
            console.log('logged out');
        }
        catch{
            setError('Failed to logout');
        }

    }

    return ( 
        <div className="header">
            <Navbar fixed="top" bg="primary" expand="lg" style={{paddingTop: 10}}>
                <Container fluid>
                    <Navbar.Brand href="/home">
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                        <a href="/home" id="navbar-name">V Y R M I N</a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/all-bugs">Bugs</Nav.Link>
                            {!currentUser && <Nav.Link href="/login">Login</Nav.Link>}
                            {!currentUser && <Nav.Link href="/signup">Signup</Nav.Link>}
                            {currentUser && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
                            {currentUser && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default Header;
