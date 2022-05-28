import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import BugCard from '../components/BugCard';
import { useAuth } from '../contexts/AuthContext';


const BugPostDetails = () => {
    const [postState, setPostState] = useState([]);
    const titleRef = useRef();
    const errorRef = useRef();
    const bodyRef = useRef();
    const [updating, setUpdating] = useState(false);
    const { currentUser } = useAuth();
    const { id } = useParams();
    const history = useNavigate();


    const getBugDetails = () => {
        axios.get(`/bugs/${id}`)
            .then((response) => {
            const data = response.data;
            setPostState(data);
            console.log('SingleBug Post Data Successsfuly Received: ', data);
          })
          .catch((err) => {
            console.log('Error retreiving SINGLE POST data!!!');
          })
    }

    // const deleteBugPost = (e) => {
    //     e.preventDefault();
    //     axios.delete(`/bugs/${id}`)
    //         .then((response) => {
    //             console.log('FRONT END SUCCESS DELETING POST');
    //         })
    //         .catch((err) => {
    //             console.log('FRONT END Error retreiving SINGLE POST data!!!');
    //         })
    //     history('/all-bugs');
    // }

    const submit = (e) => {
        e.preventDefault();
        const owner = postState.posterID ? postState.posterID : (currentUser ? currentUser.email : 'anonymous');
        console.log('poster: ', postState.posterID);
        const payload = {
            title: titleRef.current.value,
            error: errorRef.current.value,
            body: bodyRef.current.value,
            posterID: owner,
            status: 0
        }

        console.log('updated is, ', payload);

        axios({
            url: `/bugs/${id}`,
            method: 'PUT',
            data: payload
        })
        .then((response) => {
            console.log('in put function');
            setUpdating(false);
        })
        .catch((err) => {
            console.log('failed to update bug data');
            console.log(err);
        })
        // setUpdating(false);
        history(0);

    }



    useEffect(() => {
        // console.log('rerendered 
        getBugDetails();
        
    }, [])

    return ( 
        <section className="text-center">
            {updating ? (
            <Card style={{ margin: 10 }} >
                <Card.Header style={{ display: "flex" }}>
                    <span
                        style={{
                            color: "black",
                            textDecoration: "none",
                            flex: 1,
                            alignSelf: "center",
                            fontSize: 18,
                        }}
                    >
                    {/* {updating ? <div>Update</div> : postState.title} */}
                    </span>
                </Card.Header>
                    <Card.Body style={{color: "black"}}>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Title" ref={titleRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Enter Error" ref={errorRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                                <Form.Control type="text" placeholder="Write Body" ref={bodyRef} required />
                            </Form.Group>
                            <Button  variant="primary" type="submit" >Submit</Button>
                        </Form>
                    </Card.Body>
        
            </Card>
             ) : (
                <Container>
                    <BugCard title={postState.title} error={postState.error} body={postState.body} posterEmail={postState.posterID} status={postState.status} id={postState._id}/>
                </Container>
             )}

            {/* <Link to='/all-bugs' style={{textDecoration: 'none'}}>All Bugs</Link> */}
        </section>
     );
}
 
export default BugPostDetails;