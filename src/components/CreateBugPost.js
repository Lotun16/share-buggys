import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useAuth } from '../contexts/AuthContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const CreateBugPost = () => {
    const titleRef = useRef();
    const errorRef = useRef();
    const bodyRef = useRef();
    const [loading, setLoading] = useState(false)
    const [postState, setPostState] = useState([]);
    const { currentUser } = useAuth();

    const resetForm = () => {
        titleRef.current.value='';
        errorRef.current.value='';
        bodyRef.current.value=''; 
    }


    const getBugPost = () => {
        axios.get('/bugs')
          .then((response) => {
            const data = response.data;
            console.log('email', currentUser.email);
            console.log(response);
            // console.log('data', data);
            setPostState(data);
            console.log('Bug Post Data Successsfuly Received: ');
          })
          .catch((err) => {
            console.log('Error retreiving data!!!');
          })
    }

    const submit = (e) => {
        const poster = currentUser ? currentUser.email : 'anonymous';
        console.log('poster:', poster );
        
        const payload = {
          title: titleRef.current.value,
          error: errorRef.current.value,
          body: bodyRef.current.value,
          posterID: poster,
          status: 0
        }

        if(currentUser == true){
            console.log('userexists', currentUser.email);
        }
        else{
            console.log('please log in to create a post');
        }

        console.log('payload: ', payload);

        axios({
            url: '/bugs',
            method: 'POST',
            data: payload
          })
          .then(()=> {
            console.log('Data has been sent to the server');
            resetForm();
            getBugPost();
          })
          .catch(() => {
            console.log('Internal server error');
        })
    }

    useEffect(() => {
        console.log('rerendered');
        getBugPost();
    }, [])

    return (
        <>
            <h1>Submit Bug Post</h1>
            <Container>
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" ref={titleRef} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Error</Form.Label>
                        <Form.Control type="text" placeholder="Enter Error" ref={errorRef} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                    <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" placeholder="Write Body" ref={bodyRef} required />
                    </Form.Group>

                    <Button disabled={loading} variant="primary w-100 mb-4" type="submit">Submit</Button>
                </Form>
            </Container>
            {/* <div className="bugpost">
                {postState.map((post, i) => (
                    <div key={i}>
                        <h2>TITLE: {post.title}</h2>
                        <h3>ERROR: {post.error}</h3>
                        <p>BODY: {post.body}</p>
                        <p>POSTER: {post.posterID}</p>
                    </div>
                ))}
            </div> */}
        </>
      );
}
 
export default CreateBugPost;