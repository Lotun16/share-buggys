import React from 'react';
import {useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import welcome from '../images/waiting.svg';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, googleSign, currentUser } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if(passwordRef.current.value !== passwordConfirmRef.current.value){
        //     return setError('Passwords do not match')
        // }
        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value)
            history('/dashboard');
        }
        catch{
            setError('Failed to sign in')
        }
        setLoading(false);
        
    }

    const loginWithGoogle = async () => {
        await googleSign();
        history('/dashboard')
        console.log(currentUser);
    }


    return ( 
        
        <section>
            <h1 className='text-center mb-3' style={{fontFamily: 'Roboto Slab', fontSize: '75px'}}>Log In</h1>
            {error && <Alert variant ="danger" >{error}</Alert>}
            <Container className='mt-5'>
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <img  className="w-100" src={welcome} alt="" />
                    </Col>

                    <Col lg={4} md={6} sm={12} className="text-center" style={{alignItems: 'center', justifyContent: 'center' }}>
                       
                        <div className="h1 mb-3">
                            <i className="bi bi-people-fill" style={{fontSize: '100px', color: '#00BFA6'}}></i>
                        </div>  
                        <Form onSubmit={handleSubmit}>
                            <Row >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                            </Form.Group>

                            <Button disabled={loading} variant="primary w-100 mb-4" type="submit">Log In</Button>
                        </Form>
                        <Button  variant="danger w-100 mb-4" onClick={() => loginWithGoogle()} type="submit">Log In with <i class="bi bi-google"></i></Button>
                        <div className="w-100 text-center mt-2">
                            <Link to="/forgot-password" style={{textDecoration: 'none'}}>Forgot Password?</Link>
                        </div>
                        <div className="w-100 text-center mt-2">
                            Dont have an account? <Link to="/signup" style={{textDecoration: 'none'}}>Sign Up</Link>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Login;
