import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import BugCard from '../components/BugCard.js';
import BugCarb from '../components/BugCarb.js';

const AllBugsPage = () => {
    const [postState, setPostState] = useState([]);

    const getBugPost = () => {
        axios.get('/bugs')
          .then((response) => {
            const data = response.data;
            setPostState(data);
            console.log('Bug Post Data Successsfuly Received: ');
          })
          .catch((err) => {
            console.log('Error retreiving data!!!');
          })
    }

    useEffect(() => {
        console.log('rerendered all bugs page');
        getBugPost();
    }, [])

    return ( 
        <section className="App-back">
            <h1>Bug Post Forum</h1>
            <Container>
                <div className="bugpost">
                    {postState.map((post, i) => (
                        <Link to={`/bugs-all/${post._id}`} style={{textDecoration: 'none'}}  key={i}>
                            <BugCard title={post.title}
                                     error={post.error} 
                                     body={post.body} 
                                     posterEmail={post.posterID} 
                                     status={post.status} 
                                     id={post._id}/>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
     );
}
 
export default AllBugsPage;