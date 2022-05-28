import React from 'react';
import axios from 'axios';
import { useState, useRef, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Alert  from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAuth } from '../contexts/AuthContext';
import MyBugsPage from '../views/MyBugsPage';
import SideBar from '../components/SideBar';
import ContactCard from '../components/ContactCard';

const Dashboard = () => {
    const { currentUser} = useAuth();

    return ( 
        <Row fluid>
            <Col >
                <h1 className="text-center">DASHBOARD</h1>
                <ContactCard user={currentUser.email}/>
                <div className="w-100 text-center mt-2">
                
                </div>
                <MyBugsPage />
            </Col>            
        </Row>
     );
}
 
export default Dashboard;