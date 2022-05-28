import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import BugCard from '../components/BugCard.js';
import CreateBugPost from '../components/CreateBugPost';
import { useAuth } from '../contexts/AuthContext.js';
import { Button } from 'react-bootstrap';
import BugPostDetails from '../views/BugPostDetails';


const MyBugsPage = () => {
    const [postState, setPostState] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { currentUser } = useAuth();

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

    const newArray = postState.filter((bug) => {
        return bug.posterID == currentUser.email
    })

    console.log('newArray: ', newArray);

    return ( 
        <section className="text-center">
            {/* <h1>MY BUG POSTS</h1> */}
            <Container>
                <div className="bug-post">
                    {newArray.map((post, i) => (
                        <Link to={`/bugs/${post._id}`} style={{textDecoration: 'none'}}  key={i}>
                            <BugCard title={post.title}
                                error={post.error} 
                                body={post.body} 
                                posterEmail={post.posterID} 
                                status={post.status} 
                                id={post._id}/>
                        </Link>
                    ))}
                </div>
                {showForm ? ( <CreateBugPost></CreateBugPost>
                ) : ( <Button onClick={() => setShowForm(true)}>Add Bug Post</Button> )}
            </Container>
        </section>
     );
}
 
export default MyBugsPage;