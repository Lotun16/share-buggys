import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useAuth } from '../contexts/AuthContext';
import Row from 'react-bootstrap/Row'; 
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';


const BugCard = ({ title, error, body, posterEmail, id, status}) => {

    const { currentUser } = useAuth();

    const style = (currentUser.email == posterEmail) ? `red-tag` : `blue-tag`;

    
    return ( 
        <>
            <Container>
                <Card>
                    <Card.Header>
                        {posterEmail}
                    </Card.Header>
                    <Row>
                        {title}
                    </Row>
                    <Row>
                        {error}
                    </Row>
                    <Row>
                        {body}
                    </Row>
                </Card>
            </Container>
        </>
     );
}
 
export default BugCard;